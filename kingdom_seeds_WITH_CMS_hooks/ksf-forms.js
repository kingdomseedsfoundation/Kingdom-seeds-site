(function () {
  function encode(data){return Object.keys(data).map(k=>encodeURIComponent(k)+"="+encodeURIComponent(data[k])).join("&");}
  function defMsg(n){n=(n||"").toLowerCase(); return n==="newsletter"
    ? "You\u2019ve been added to our newsletter list. Thank you for staying connected with Kingdom Seeds Foundation!"
    : "Thank you for reaching out to Kingdom Seeds Foundation. We\u2019ve received your submission and will be in touch soon."; }
  function toJSON(form){const d={}; form.querySelectorAll("input,textarea,select").forEach(el=>{
    if(!el.name) return; if((el.type==="checkbox"||el.type==="radio") && !el.checked) return;
    if(el.type==="file") return; d[el.name]=el.value; }); return d; }
  function thank(form,msg){const div=document.createElement("div"); div.className="ksf-thanks"; div.textContent=msg;
    form.style.display="none"; form.parentNode.insertBefore(div, form.nextSibling);
    if(document.body.classList.contains("drawer-open")) document.body.classList.remove("drawer-open"); }
  function bind(form){
    if(form.__ksfBound) return; form.__ksfBound=true;
    form.addEventListener("submit", function onSubmit(e){
      if(form.hasAttribute("data-bypass-ajax")) return; e.preventDefault();
      const hp=form.getAttribute("netlify-honeypot")||"bot-field"; const bot=form.querySelector(`[name="${hp}"]`);
      if(bot && bot.value){ thank(form,"Thank you!"); return; }
      const btn=form.querySelector('button[type="submit"],input[type="submit"]'); if(btn) btn.disabled=true;
      const fn=(form.querySelector('input[name="form-name"]')||{}).value || form.getAttribute("name") || "form";
      const data=toJSON(form); data["form-name"]=fn;
      fetch("/", { method:"POST", headers:{ "Content-Type":"application/x-www-form-urlencoded" }, body:encode(data) })
        .then(()=> thank(form, form.getAttribute("data-thanks") || defMsg(fn)))
        .catch(()=>{ if(btn) btn.disabled=false; form.removeEventListener("submit", onSubmit); form.submit(); });
    });
  }
  function init(){ document.querySelectorAll('form[data-netlify="true"]').forEach(bind); }
  document.readyState==="loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();