# Christi's Next Steps 🦋

Work top to bottom. Check things off as you go. Small steps are fine!

---

## 1. Cozy Critters: Pitch Modal  ⭐ START HERE

### Already done ✅
- [x] HTML: greeting, 3 paragraphs, "~ Christi 🦋" signature, two buttons
- [x] Picture-frame border, padding, max-height + scroll, phone sizing
- [x] Escape key listener

### Next, in this order:
- [ ] **Quiet down "Keep exploring"** (readable, just less flashy):
      no border or shadow, smaller font (14px), cocoa text, underline on hover
- [ ] **Write the JavaScript** (index.js):
```js
function closePitch() {
  document.getElementById("pitch").classList.remove("pitch--open");
  localStorage.setItem("pitchSeen", "yes");
}

if (!localStorage.getItem("pitchSeen")) {
  setTimeout(function () {
    document.getElementById("pitch").classList.add("pitch--open");
  }, 3000);
}
```
      Read it like a question: "Is there NO note saying they've seen it?
      Then wait 3 seconds and slide it in."
- [ ] **Turn on the slide-in** (styles.css, .pitch):
      un-comment position, transform and transition,
      then add  right: 24px;  bottom: 24px;
- [ ] **Add the open class:**  .pitch--open { transform: translateX(0); }
- [ ] **Test:** wait 3 seconds, click Keep exploring, press Esc.
      To see it again: DevTools → Application → Local Storage → delete pitchSeen
- [ ] Optional: script font for the signature (Dancing Script or Great Vibes)
- [ ] Commit + push 🎉
- [ ] Later (optional): swap the timer for the shop-section trigger (IntersectionObserver)

---

## 2. Cozy Critters: Quick Checks
- [ ] GitHub repo → Settings → Pages → tick **Enforce HTTPS** (once it's clickable)
- [ ] Decide on the small leftover pics in assets (kitten-bg, kitten2-bg, puppy2-bg,
      anniversary-bg, hero-big-alt): keep or delete
- [ ] Optional: photo credits in the footer (Pexels photographers)

---

## 3. E-Portfolio Fixes  (Eportfolio folder)
- [x] LinkedIn link fixed ✅
- [ ] **Test the contact form.** index.js uses template_h4ftgzz (old) with the new public key.
      If the error alert pops up, swap in your new Template ID.
- [ ] Error alert says **your_beautiful@yahoo.com** → change to the email you really check
- [ ] **Gift Shop card → Cozy Critters card:**
      - [ ] Title: Cozy Critters
      - [ ] Subtitle: remove "React" (it's HTML, CSS, JavaScript)
      - [ ] GitHub icon → https://github.com/christihansen-png/cozy-critters
      - [ ] Live link → https://cozycritters.beautifulyouwebstudio.com  + target="_blank"
      - [ ] Description: one line on the idea + what you BUILT
            (live gift card preview, cart with localStorage, responsive layout, different hero photo per screen size)
      - [ ] Screenshot: 1920 x 1080 (send it to Claude to crop/size)
- [ ] Hide the **Estate Management** and **Lawn Care** cards until they're built
- [ ] Studio card: GitHub icon points to the website, not the repo
- [ ] Small cleanup: alt text on project images, Email input type="email",
      remove stray "div" class, remove alt on <a>, delete .project__:hover typo, delete empty app.js
- [ ] Commit + push

---

## 4. Studio Site (beautifulyouwebstudio.com)
- [ ] Add the **website examples** section with a Cozy Critters project card
      (screenshot, name, 1–2 lines, "View Sample Site" link with target="_blank")

---

💛 Pace yourself. One checkbox at a time still counts.
