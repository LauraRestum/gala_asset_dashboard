const STATUS = {
  complete: { cls: "status-complete", label: "Complete" },
  draft: { cls: "status-draft", label: "Draft" },
  approval: { cls: "status-approval", label: "Awaiting approval" },
  approvalprint: { cls: "status-approval", label: "Awaiting approval — ready for print" },
  ordering: { cls: "status-production", label: "Ordered — arriving September 25th" },
  fundaneed: { cls: "status-draft", label: "Awaiting fund-a-need levels" },
  production: { cls: "status-production", label: "In production" },
  notstarted: { cls: "status-notstarted", label: "Not started" },
};

const sectionConfig = [
  {
    group: "Invitations & Print",
    sections: [
      {
        id: "print",
        title: "Invitations & Print",
        assets: [
          {
            name: "Save the Date — 7x5 Card",
            file: "save-the-date.jpg",
            status: "complete",
            clickup: "https://app.clickup.com/t/86ak6h9v6",
          },
          {
            name: "Sponsorship Book",
            file: "booklet-cover.jpg",
            status: "complete",
            clickup: "https://app.clickup.com/t/86ak6h9wx",
          },
          {
            name: "Invitation — Outside (Front & Back)",
            file: "invite-outside.jpg",
            status: "complete",
            url: "assets/2026-gala-invite-trifold.pdf",
            urlLabel: "Full trifold (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h82e",
            groupId: "invitation",
            groupLabel: "Trifold Invitation — one piece, outside & inside",
          },
          {
            name: "Invitation — Inside",
            file: "invite-inside.jpg",
            status: "complete",
            url: "assets/2026-gala-invite-trifold.pdf",
            urlLabel: "Full trifold (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h82e",
            groupId: "invitation",
          },
          {
            name: "Day-of Program",
            file: "program-01.jpg",
            pages: 20,
            pagePrefix: "program-",
            status: "draft",
            url: "assets/2026-gala-program.pdf",
            urlLabel: "Full program (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h8r1",
            groupId: "program",
            groupLabel: "Day-of Program — one booklet, 20 pages",
          },
          {
            name: "Day-of Program — All 20 Pages",
            file: "program-grid.jpg",
            status: "draft",
            url: "assets/2026-gala-program.pdf",
            urlLabel: "Full program (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h8r1",
            groupId: "program",
          },
          {
            name: "Bidder Card — Side A (Venue Map)",
            file: "bidder-card-map.jpg",
            status: "approval",
            url: "assets/2026-gala-bidder-card.pdf",
            urlLabel: "Front & back proof (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h83x",
            groupId: "bidder-card",
            groupLabel: "Bidder Card — one card, two sides",
          },
          {
            name: "Bidder Card — Side B (Bidder Number)",
            file: "bidder-card-number.jpg",
            status: "approval",
            url: "assets/2026-gala-bidder-card-numbers.pdf",
            urlLabel: "All 300 cards, 101–400 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6h83x",
            groupId: "bidder-card",
          },
        ],
      },
    ],
  },
  {
    group: "Event Signage",
    sections: [
      {
        id: "signage",
        title: "Event Signage",
        assets: [
          {
            name: "Welcome Sign",
            file: "welcome-sign.jpg",
            status: "approvalprint",
            url: "assets/2026-gala-welcome-sign.pdf",
            urlLabel: "Print file, 24x30 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6hb8d",
            groupId: "entry",
            groupLabel: "Entry & Check-In",
          },
          {
            name: "Check-In Sign",
            file: "nfv-p4.jpg",
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6hb8d",
            groupId: "entry",
          },
          {
            name: "Upstairs Directional — Event Continues Upstairs",
            file: "nfv-p5.jpg",
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6hbdc",
            groupId: "wayfinding",
            groupLabel: "Wayfinding Directionals",
          },
          {
            name: "Directional — Sensory Experiences & Cocktails (Beren Room)",
            file: "beren-room-sign.jpg",
            status: "approvalprint",
            url: "assets/2026-gala-beren-room-sign.pdf",
            urlLabel: "Print file, 24x30 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6hbdc",
            groupId: "wayfinding",
          },
          {
            name: "Directional — Photo Booth & Cocktails (Upper Gallery)",
            file: "upper-gallery-sign.jpg",
            status: "approvalprint",
            url: "assets/2026-gala-upper-gallery-sign.pdf",
            urlLabel: "Print file, 24x30 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6hbdc",
            groupId: "wayfinding",
          },
          {
            name: "Bar Sign — Hand Crafted Cocktails",
            file: "nfv-p7.jpg",
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6hb5e",
            groupId: "wayfinding",
          },
          {
            name: "Tactile Art Experience Sign",
            file: "tactile-art-sign.jpg",
            status: "approvalprint",
            url: "assets/2026-gala-tactile-art-sign.pdf",
            urlLabel: "Print file, 24x30 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6hba5",
            groupId: "experience",
            groupLabel: "Experience Stations",
          },
          {
            name: "Assistive Technology Experience Sign",
            file: "assistive-tech-sign.jpg",
            status: "approvalprint",
            url: "assets/2026-gala-assistive-tech-sign.pdf",
            urlLabel: "Print file, 24x30 (PDF)",
            clickup: "https://app.clickup.com/t/86ak6hb6v",
            groupId: "experience",
          },
          {
            name: "Through Their Eyes Roll-Up Banner — Adah",
            file: "adah-banner.jpg",
            copyPanel: true,
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6h877",
            groupId: "banners",
            groupLabel: "Through Their Eyes Roll-Up Banners — one set of four",
          },
          {
            name: "Through Their Eyes Roll-Up Banner — Aubree",
            file: "aubree-banner.jpg",
            copyPanel: true,
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6h877",
            groupId: "banners",
          },
          {
            name: "Through Their Eyes Roll-Up Banner — Hashim",
            placeholder: "In production",
            status: "production",
            clickup: "https://app.clickup.com/t/86ak6h877",
            groupId: "banners",
          },
          {
            name: "Through Their Eyes Roll-Up Banner — Steven",
            placeholder: "In production",
            status: "production",
            clickup: "https://app.clickup.com/t/86ak6h877",
            groupId: "banners",
          },
        ],
      },
    ],
  },
  {
    group: "Show & Presentation",
    sections: [
      {
        id: "show",
        title: "Show & Presentation",
        assets: [
          {
            name: "Cocktail Hour Loop (Slides)",
            file: "cocktail-loop.jpg",
            pages: 63,
            pagePrefix: "cocktail-loop-",
            pageWord: "Slide",
            slideshow: true,
            status: "complete",
            url: "https://dlhfb.sharepoint.com/:p:/s/EnvisionMarketing/IQAOw9xZ1o6XQp6Yx0FvQ9iUAXwPDjsJxEUFCl-PS4IbT8I?e=WvUkd0",
            urlLabel: "Open the latest deck in PowerPoint (SharePoint)",
            download: "assets/2026-gala-cocktail-loop.pptx",
            downloadLabel: "Download the deck (PPTX, 16 MB)",
            clickup: "https://app.clickup.com/t/86ak6h8cy",
          },
          {
            name: "Programming Presentation Assets",
            file: "program-presentation.jpg",
            pages: 32,
            pagePrefix: "program-presentation-",
            pageWord: "Slide",
            status: "draft",
            url: "https://dlhfb.sharepoint.com/:p:/s/EnvisionMarketing/IQD36SiVJXiyTJ-hCMlDPQt2AfRdb2Fu618itctBqr8_W0o?e=tsOwxu",
            urlLabel: "Open the latest deck in PowerPoint (SharePoint)",
            download: "assets/2026-gala-program-presentation.pptx",
            downloadLabel: "Download the deck (PPTX, 8 MB)",
            clickup: "https://app.clickup.com/t/86ak6h8cy",
          },
          {
            name: "Spirit of Philanthropy Award",
            file: "award.jpg",
            status: "ordering",
            clickup: "https://app.clickup.com/t/86akgg61d",
          },
        ],
      },
      {
        id: "segments",
        title: "Program Spotlight Segments",
        assets: [
          {
            name: "Level Up — 90-Second Video",
            video: "levelup-90.mp4",
            poster: "levelup-poster.jpg",
            status: "draft",
            dropbox:
              "https://www.dropbox.com/scl/fi/newlqokd1rcjl0dyw3uo6/Level-Up-90-Sec.mp4?rlkey=bkorvfmnbi5zyp55cl7y2p1qv&st=he3pw9wv&dl=0",
            clickup: "https://app.clickup.com/t/86ak6h8hh",
          },
          {
            name: "Heather's Camp — 90-Second Video",
            video: "heathers-camp-90.mp4",
            poster: "heathers-camp-poster.jpg",
            status: "draft",
            dropbox:
              "https://www.dropbox.com/scl/fi/b4z6ok79lnnijej3v6606/Heathers-Camp-2026-90-Sec.mp4?rlkey=wdktvt18g8cywrys7d0q64n4a&st=hwhnuzw9&dl=0",
            clickup: "https://app.clickup.com/t/86ak6h8g1",
          },
          {
            name: "Child Development Center",
            placeholder: "In production",
            status: "production",
            clickup: "https://app.clickup.com/t/86aketm6z",
          },
          {
            name: "Wichita Building",
            placeholder: "In production",
            status: "production",
            clickup: "https://app.clickup.com/t/86aketm5t",
          },
          {
            name: "Programs Legacy",
            placeholder: "In production",
            status: "production",
            clickup: "https://app.clickup.com/t/86ak6h8m0",
          },
        ],
      },
    ],
  },
  {
    group: "Digital",
    sections: [
      {
        id: "digital",
        title: "Digital & Communications",
        assets: [
          {
            name: "Gala Webpage Ticket Link",
            file: "gala-webpage.jpg",
            status: "complete",
            url: "https://www.envisionus.com/envision-gala",
            urlLabel: "Open the gala webpage",
            clickup: "https://app.clickup.com/t/86ak6ha1e",
          },
          {
            name: "Pre-Communications",
            placeholder: "Not started",
            status: "notstarted",
            clickup: "https://app.clickup.com/t/86ak6h9z2",
          },
        ],
      },
    ],
  },
];

// Images live in the assets/ folder.
const assetRoot = "assets/";
const navRoot = document.getElementById("sidebar-nav");
const contentRoot = document.getElementById("content");
const modal = document.getElementById("asset-modal");
const modalTitle = document.getElementById("modal-title");
const modalPreview = document.getElementById("modal-preview");
const modalClose = document.getElementById("modal-close");
const modalPrev = document.getElementById("modal-prev");
const modalNext = document.getElementById("modal-next");
const modalFullscreen = document.getElementById("modal-fullscreen");
const modalPlay = document.getElementById("modal-play");
const modalStage = document.getElementById("modal-stage");
const fsCopyView = document.getElementById("fs-copy-view");
const fsTitle = document.getElementById("fs-title");
const fsPrev = document.getElementById("fs-prev");
const fsNext = document.getElementById("fs-next");
const fsPlay = document.getElementById("fs-play");
const fsExit = document.getElementById("fs-exit");

// Multi-page assets expand into one viewer entry per page.
const expandAsset = (asset) => {
  if (!asset.pages || asset.pages < 2 || !asset.pagePrefix) return [asset];
  const word = asset.pageWord || "Page";
  const pages = [];
  for (let i = 1; i <= asset.pages; i++) {
    pages.push({
      ...asset,
      name: `${asset.name} — ${word} ${i} of ${asset.pages}`,
      file: `${asset.pagePrefix}${String(i).padStart(2, "0")}.jpg`,
    });
  }
  asset.modalTarget = pages[0];
  return pages;
};

const allAssets = sectionConfig
  .flatMap((group) => group.sections.flatMap((section) => section.assets))
  .flatMap(expandAsset)
  .filter((asset) => asset.file || asset.video);
let activeAssetIndex = -1;

// ---------------------------------------------------------------------------
// Tiles
// ---------------------------------------------------------------------------
const createPlaceholder = (label = "Image not uploaded yet") => {
  const holder = document.createElement("div");
  holder.className = "placeholder";
  holder.textContent = label;
  return holder;
};

const createPlayBadge = () => {
  const badge = document.createElement("span");
  badge.className = "play-badge";
  badge.setAttribute("aria-hidden", "true");
  badge.textContent = "▶";
  return badge;
};

const renderTilePreview = (preview, asset) => {
  if (!asset.file && !asset.video) {
    preview.replaceChildren(createPlaceholder(asset.placeholder));
    return;
  }

  preview.replaceChildren(createPlaceholder("Loading..."));

  const image = new Image();
  image.alt = asset.video ? `${asset.name} (video)` : asset.name;

  image.addEventListener("error", () => {
    preview.replaceChildren(createPlaceholder());
  });
  image.addEventListener("load", () => {
    if (asset.video) {
      preview.replaceChildren(image, createPlayBadge());
    } else {
      preview.replaceChildren(image);
    }
  });

  image.src = `${assetRoot}${asset.video ? asset.poster : asset.file}`;
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const buildAssetTile = (asset) => {
  const card = document.createElement("div");
  card.className = "tile";
  if (asset.anchorId) card.id = asset.anchorId;

  const preview = document.createElement("div");
  preview.className = "tile-preview";
  preview.setAttribute("role", "button");
  preview.tabIndex = 0;
  preview.setAttribute("aria-label", `Preview ${asset.name}`);

  const activate = () => {
    if (asset.file || asset.video) {
      openModal(asset);
      return;
    }
    const target = asset.url || asset.clickup;
    if (target) {
      window.open(target, "_blank", "noopener,noreferrer");
    }
  };

  if (!asset.file && !asset.video && (asset.url || asset.clickup)) {
    preview.setAttribute("aria-label", `Open ${asset.name}`);
  }

  preview.addEventListener("click", activate);
  preview.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });

  const body = document.createElement("div");
  body.className = "tile-body";

  const title = document.createElement("p");
  title.className = "tile-title";
  title.textContent = asset.name;

  const meta = document.createElement("p");
  meta.className = "tile-meta";

  const status = STATUS[asset.status] || STATUS.notstarted;
  const chip = document.createElement("span");
  chip.className = `status ${status.cls}`;
  chip.textContent = status.label;
  meta.append(chip);

  if (asset.due) {
    const due = document.createElement("span");
    due.className = "status status-due";
    due.textContent = asset.due;
    meta.append(due);
  }

  const fileLabel = document.createElement("p");
  fileLabel.className = "tile-file";

  const addLink = (href, text) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = text;
    fileLabel.append(link);
  };

  if (asset.dropbox) addLink(asset.dropbox, "Full quality on Dropbox");
  if (asset.url) addLink(asset.url, asset.urlLabel || "Open file");
  if (asset.download) {
    const link = document.createElement("a");
    link.href = asset.download;
    link.download = "";
    link.textContent = asset.downloadLabel || "Download file";
    fileLabel.append(link);
  }
  if (asset.clickup) addLink(asset.clickup, "Team notes in ClickUp");
  if (!fileLabel.childNodes.length && asset.file) {
    fileLabel.textContent = asset.file;
  }

  body.append(title, meta, fileLabel);
  card.append(preview, body);

  renderTilePreview(preview, asset);
  return card;
};

const buildSection = (section) => {
  const el = document.createElement("section");
  el.className = "section";
  el.id = section.id;

  const heading = document.createElement("h2");
  heading.textContent = section.title;

  const grid = document.createElement("div");
  grid.className = "grid";

  // Related pieces (front/back sides, a booklet and its spread, a banner
  // set) render together inside one labeled wrapper.
  let i = 0;
  while (i < section.assets.length) {
    const asset = section.assets[i];

    if (asset.groupId) {
      const run = [asset];
      let j = i + 1;
      while (j < section.assets.length && section.assets[j].groupId === asset.groupId) {
        run.push(section.assets[j]);
        j += 1;
      }

      if (run.length > 1) {
        const group = document.createElement("div");
        group.className = "tile-group";
        group.dataset.size = run.length;

        const label = document.createElement("p");
        label.className = "group-label";
        label.textContent = asset.groupLabel || "Related pieces";

        const tiles = document.createElement("div");
        tiles.className = "group-tiles";
        run.forEach((member) => tiles.append(buildAssetTile(member)));

        group.append(label, tiles);
        grid.append(group);
        i = j;
        continue;
      }
    }

    grid.append(buildAssetTile(asset));
    i += 1;
  }

  el.append(heading, grid);
  contentRoot.append(el);
};

// Briefly glow a tile after jumping to it from the sidebar. Removing and
// re-adding the class lets a second click restart the animation.
const flashTile = (tile) => {
  tile.classList.remove("tile-glow");
  void tile.offsetWidth;
  tile.classList.add("tile-glow");
  clearTimeout(tile.glowTimer);
  tile.glowTimer = setTimeout(() => tile.classList.remove("tile-glow"), 1700);
};

const buildNav = () => {
  sectionConfig.forEach((group) => {
    group.sections.forEach((section) => {
      section.assets.forEach((asset) => {
        asset.anchorId = `asset-${slugify(asset.name)}`;
      });

      buildSection(section);

      const groupWrap = document.createElement("div");
      groupWrap.className = "nav-group";

      const sectionLink = document.createElement("a");
      sectionLink.className = "nav-link nav-section-link";
      sectionLink.href = `#${section.id}`;
      sectionLink.dataset.target = section.id;
      sectionLink.textContent = section.title;

      sectionLink.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById(section.id).scrollIntoView({ behavior: "smooth", block: "start" });
      });

      const list = document.createElement("ul");
      list.className = "nav-list nav-asset-list";

      section.assets.forEach((asset) => {
        const item = document.createElement("li");
        item.className = "nav-item";

        const link = document.createElement("a");
        link.className = "nav-link nav-asset-link";
        link.href = `#${asset.anchorId}`;
        link.textContent = asset.name;

        link.addEventListener("click", (event) => {
          event.preventDefault();
          const tile = document.getElementById(asset.anchorId);
          if (!tile) return;
          tile.scrollIntoView({ behavior: "smooth", block: "center" });
          flashTile(tile);
        });

        item.append(link);
        list.append(item);
      });

      groupWrap.append(sectionLink, list);
      navRoot.append(groupWrap);
    });
  });
};

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------
const attachMagnifier = (wrap, img) => {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const zoom = 2.4;
  wrap.addEventListener("mousemove", (event) => {
    const rect = wrap.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = `scale(${zoom})`;
  });
  wrap.addEventListener("mouseleave", () => {
    img.style.transform = "";
  });
};

const pauseModalVideo = () => {
  const playing = modalPreview.querySelector("video");
  if (playing) playing.pause();
};

// Loop slides render on a persistent stage and arrive with the deck's own
// push transition: the new slide slides in while the old one is pushed out
// the opposite side.
const renderLoopSlide = (asset) => {
  let stage = modalPreview.querySelector(".loop-stage");
  const fresh = !stage || stage.dataset.prefix !== asset.pagePrefix;
  if (fresh) {
    stage = document.createElement("div");
    stage.className = "loop-stage";
    stage.dataset.prefix = asset.pagePrefix;
    modalPreview.replaceChildren(stage);
  }

  const img = new Image();
  img.alt = asset.name;
  img.addEventListener("error", () => {
    modalPreview.replaceChildren(createPlaceholder(`Missing image: ${asset.file}`));
  });
  img.addEventListener("load", () => {
    const old = stage.querySelector("img.current");
    img.classList.add("current");
    if (old && navDirection !== 0) {
      img.classList.add(navDirection === 1 ? "push-from-right" : "push-from-left");
      old.classList.remove("current");
      old.classList.add(navDirection === 1 ? "push-to-left" : "push-to-right");
      setTimeout(() => old.remove(), 1100);
    } else if (old) {
      old.remove();
    }
    stage.append(img);
  });
  img.src = `${assetRoot}${asset.file}`;

  // Preload the following slide so autoplay pushes without a loading hitch.
  const range = slideshowRange(asset);
  if (range) {
    const nextIndex =
      activeAssetIndex >= range.end ? range.start : activeAssetIndex + 1;
    new Image().src = `${assetRoot}${allAssets[nextIndex].file}`;
  }
};

const renderModalAsset = (asset) => {
  modalTitle.textContent = asset.name;
  fsTitle.textContent = asset.name;
  pauseModalVideo();

  // Banners with a copy panel get a full-screen side view of their top
  // section so the copy is easy to read.
  const showCopy = Boolean(asset.copyPanel && asset.file);
  modalStage.dataset.copy = showCopy ? "true" : "false";
  fsCopyView.style.backgroundImage = showCopy
    ? `url("${assetRoot}${asset.file}")`
    : "";

  updatePlayButtons();

  if (asset.video) {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.setAttribute("playsinline", "");
    if (asset.poster) video.poster = `${assetRoot}${asset.poster}`;

    // If the bundled file cannot play, fall back to streaming from Dropbox.
    const dropboxStream = asset.dropbox
      ? asset.dropbox.replace("dl=0", "raw=1")
      : null;
    let triedFallback = false;
    video.addEventListener("error", () => {
      if (dropboxStream && !triedFallback) {
        triedFallback = true;
        video.src = dropboxStream;
        video.load();
        return;
      }
      const holder = createPlaceholder("Video could not load here.");
      if (asset.dropbox) {
        const link = document.createElement("a");
        link.href = asset.dropbox;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Watch on Dropbox";
        holder.append(document.createElement("br"), link);
      }
      modalPreview.replaceChildren(holder);
    });

    video.src = `${assetRoot}${asset.video}`;
    modalPreview.replaceChildren(video);
    return;
  }

  if (asset.slideshow) {
    renderLoopSlide(asset);
    return;
  }

  // Keep the current image up while the next one loads so paging stays
  // clean instead of flashing a loading card.
  if (!modalPreview.querySelector("img")) {
    modalPreview.replaceChildren(createPlaceholder("Loading..."));
  }

  const fullImage = new Image();
  fullImage.alt = asset.name;
  fullImage.className = "modal-slide";

  fullImage.addEventListener("error", () => {
    modalPreview.replaceChildren(createPlaceholder(`Missing image: ${asset.file}`));
  });
  fullImage.addEventListener("load", () => {
    const wrap = document.createElement("div");
    wrap.className = "zoom-wrap";
    wrap.append(fullImage);
    modalPreview.replaceChildren(wrap);
    attachMagnifier(wrap, fullImage);
  });

  fullImage.src = `${assetRoot}${asset.file}`;
};

const updateModalNavigation = () => {
  modalPrev.disabled = activeAssetIndex <= 0;
  modalNext.disabled = activeAssetIndex >= allAssets.length - 1;
};

const openModalByIndex = (index) => {
  if (!slideshowAdvancing) stopSlideshow();
  activeAssetIndex = index;
  renderModalAsset(allAssets[activeAssetIndex]);
  updateModalNavigation();

  modal.hidden = false;
  document.body.style.overflow = "hidden";
};

const openModal = (asset) => {
  const nextIndex = allAssets.indexOf(asset.modalTarget || asset);
  if (nextIndex === -1) return;
  navDirection = 0;
  openModalByIndex(nextIndex);
};

const stepModalAsset = (step) => {
  const nextIndex = activeAssetIndex + step;
  if (nextIndex < 0 || nextIndex >= allAssets.length) return;
  navDirection = step > 0 ? 1 : -1;
  openModalByIndex(nextIndex);
};

const inFullscreen = () =>
  document.fullscreenElement || document.webkitFullscreenElement || null;

const exitFullscreen = () => {
  if (!inFullscreen()) return;
  (document.exitFullscreen || document.webkitExitFullscreen).call(document);
};

const toggleFullscreen = () => {
  if (inFullscreen()) {
    exitFullscreen();
    return;
  }
  const request =
    modalStage.requestFullscreen || modalStage.webkitRequestFullscreen;
  if (request) request.call(modalStage);
};

// -- Slideshow (loop demo) --------------------------------------------------
// Assets flagged `slideshow` auto-advance through their expanded pages to
// demonstrate the loop's animation, wrapping from the last slide to the
// first. Any manual navigation stops the demo.
let slideTimer = null;
let slideshowAdvancing = false;
// -1 back, 1 forward, 0 fresh open (no push animation).
let navDirection = 0;

const slideshowRange = (asset) => {
  if (!asset || !asset.slideshow || !asset.pagePrefix) return null;
  const indexes = allAssets
    .map((a, i) => (a.pagePrefix === asset.pagePrefix ? i : -1))
    .filter((i) => i !== -1);
  if (!indexes.length) return null;
  return { start: indexes[0], end: indexes[indexes.length - 1] };
};

const updatePlayButtons = () => {
  const asset = allAssets[activeAssetIndex];
  const canPlay = Boolean(asset && asset.slideshow);
  modalPlay.hidden = !canPlay;
  fsPlay.hidden = !canPlay;
  const label = slideTimer ? "Pause the loop" : "Play the loop";
  [modalPlay, fsPlay].forEach((button) => {
    button.querySelector("span").textContent = label;
    button.setAttribute("aria-label", label);
    button.classList.toggle("playing", Boolean(slideTimer));
  });
};

const stopSlideshow = () => {
  if (!slideTimer) return;
  clearInterval(slideTimer);
  slideTimer = null;
  updatePlayButtons();
};

// The deck holds each slide 8s then pushes left over ~1s (its transition
// is spd="slow" advTm="8000" with <p:push dir="l"/>), so the demo runs on
// a 9s cycle to match.
const startSlideshow = () => {
  if (slideTimer) return;
  slideTimer = setInterval(() => {
    const range = slideshowRange(allAssets[activeAssetIndex]);
    if (!range) return stopSlideshow();
    const next = activeAssetIndex >= range.end ? range.start : activeAssetIndex + 1;
    slideshowAdvancing = true;
    navDirection = 1;
    openModalByIndex(next);
    slideshowAdvancing = false;
  }, 9000);
  updatePlayButtons();
};

const toggleSlideshow = () => (slideTimer ? stopSlideshow() : startSlideshow());

const closeModal = () => {
  stopSlideshow();
  exitFullscreen();
  pauseModalVideo();
  modal.hidden = true;
  document.body.style.overflow = "";
  activeAssetIndex = -1;
};

const setupActiveNavigation = () => {
  const links = [...document.querySelectorAll(".nav-link")];
  const map = new Map(links.map((link) => [link.dataset.target, link]));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("active"));
          map.get(entry.target.id)?.classList.add("active");
        }
      });
    },
    { rootMargin: "-25% 0px -65% 0px", threshold: 0.1 }
  );

  document.querySelectorAll(".section").forEach((section) => observer.observe(section));
};

modalClose.addEventListener("click", closeModal);
modalPrev.addEventListener("click", () => stepModalAsset(-1));
modalNext.addEventListener("click", () => stepModalAsset(1));
modalFullscreen.addEventListener("click", toggleFullscreen);
modalPlay.addEventListener("click", toggleSlideshow);
fsPrev.addEventListener("click", () => stepModalAsset(-1));
fsNext.addEventListener("click", () => stepModalAsset(1));
fsPlay.addEventListener("click", toggleSlideshow);
fsExit.addEventListener("click", exitFullscreen);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") {
    // While full screen, Escape only leaves full screen; the viewer stays
    // open. Most browsers exit natively, but exit explicitly for the ones
    // that deliver the key press instead.
    if (inFullscreen()) return exitFullscreen();
    return closeModal();
  }
  if (event.key === "ArrowLeft") stepModalAsset(-1);
  if (event.key === "ArrowRight") stepModalAsset(1);
  if (event.key === "f" || event.key === "F") toggleFullscreen();
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
buildNav();
setupActiveNavigation();
