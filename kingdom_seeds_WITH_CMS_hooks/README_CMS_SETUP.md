
# How to use Netlify CMS on your site

1) Make sure your site is connected to **GitHub** in Netlify (Build & Deploy → Connect to Git).  
2) Enable **Identity** and **Git Gateway** (Site Settings → Identity). Invite yourself via email.  
3) Deploy this updated site. Then visit **/admin** on your live site and log in.

### Editing
- Hero tagline, mission, footer about, contact email, location, Monthly Goals, FAQs, Social links, Privacy Policy, and Thank-you messages are editable in the CMS.
- The page reads from **/content/site.json** via a small script injected before `</body>`.

If a piece of text doesn’t update, add a `data-cms="..."` attribute to the element you want to control and re-deploy. See examples in `admin/config.yml`.
