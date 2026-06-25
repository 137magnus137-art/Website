I ran a quick automatic fix to change references from "/site/assets/" to "/assets/" and remove leading "/site/" from src/href where safe.

Files updated:
- index.html
- admin.html
- arkive.html
- chronicle.html
- covenant.html
- digital.html
- forge.html
- hexflow/index.html
- hexflow/reference-cards.html
- hexflow/rulebook.html
- library.html
- myth.html
- myth/character-bios.html
- myth/history.html
- myth/locations.html
- myth/stories.html
- pdf-viewer.html
- vision.html
- assets/mc-nav.js
- assets/mc-starfield.js

I replaced occurrences of '/site/assets/' with '/assets/' and occurrences of '="/site/' with '="/'.

If any of your code relied on the /site/ prefix intentionally, let me know and I will revert those changes.
