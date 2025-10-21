KINGDOM SEEDS — FORMS UPDATE PACK

WHAT THIS DOES
- Inline thank-you messages (no redirect)
- Consistent KSF-green submit buttons
- Netlify detects all forms at deploy
- Ready for Zapier (use trigger: Netlify Form Submission)

FILES
- ksf-theme.css      (button color + input polish)
- ksf-forms.js       (AJAX submit + thanks)
- netlify-forms.html (hidden forms for detection)
- README.txt

HOW TO INSTALL
1) Put ALL FOUR files next to your index.html.
2) In your pages with forms, add:
   <link rel="stylesheet" href="./ksf-theme.css">     (inside <head>)
   <script src="./ksf-forms.js"></script>            (right before </body>)

3) Make sure each form looks like:
   <form name="volunteer" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-thanks="(optional custom message)">
     <input type="hidden" name="form-name" value="volunteer">
     <input type="text" name="bot-field" style="display:none" aria-hidden="true" tabindex="-1" autocomplete="off">
     ...fields...
     <button type="submit">Submit</button>
   </form>

4) Deploy: zip your site (including these files) and upload to Netlify.
5) In Netlify → Forms, confirm your forms show up.
6) Zapier: connect "Netlify Form Submission" → Google Sheets (optional, no code change).

DEFAULT THANK-YOU
- newsletter: "You’ve been added to our newsletter list. Thank you for staying connected with Kingdom Seeds Foundation!"
- others:     "Thank you for reaching out to Kingdom Seeds Foundation. We’ve received your submission and will be in touch soon."