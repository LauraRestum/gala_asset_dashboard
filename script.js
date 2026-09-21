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
        id: "signage-drafts",
        title: "Event Signage — Drafts",
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
            name: "Directional — Tactile Art & Open Bar (Beren Room)",
            file: "nfv-p6.jpg",
            status: "approvalprint",
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
        ],
      },
      {
        id: "signage-queue",
        title: "Event Signage — Queue",
        assets: [
          {
            name: "Through Their Eyes Roll-Up Banner — Adah",
            file: "adah-banner.jpg",
            status: "approvalprint",
            clickup: "https://app.clickup.com/t/86ak6h877",
            groupId: "banners",
            groupLabel: "Through Their Eyes Roll-Up Banners — one set of four",
          },
          {
            name: "Through Their Eyes Roll-Up Banner — Aubree",
            file: "aubree-banner.jpg",
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
            embed:
              "https://dlhfb.sharepoint.com/sites/EnvisionMarketing/_layouts/15/Doc.aspx?sourcedoc={b932016e-ac0e-487b-9b38-8334412dd2d4}&action=embedview&wdAr=1.7777777777777777",
            status: "complete",
            url: "https://dlhfb.sharepoint.com/sites/EnvisionMarketing/_layouts/15/Doc.aspx?sourcedoc={b932016e-ac0e-487b-9b38-8334412dd2d4}&action=embedview&wdAr=1.7777777777777777",
            urlLabel: "Open the finished deck full screen (PowerPoint viewer)",
            download: "assets/2026-gala-cocktail-loop.pptx",
            downloadLabel: "Download the deck (PPTX, 20 MB)",
            clickup: "https://app.clickup.com/t/86ak6h8cy",
          },
          {
            name: "Programming Presentation Assets",
            placeholder: "Awaiting fund-a-need levels",
            status: "fundaneed",
            clickup: "https://app.clickup.com/t/86ak6h890",
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

// Multi-page assets expand into one viewer entry per page.
const expandAsset = (asset) => {
  if (!asset.pages || asset.pages < 2 || !asset.pagePrefix) return [asset];
  const pages = [];
  for (let i = 1; i <= asset.pages; i++) {
    pages.push({
      ...asset,
      name: `${asset.name} — Page ${i} of ${asset.pages}`,
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
  if (asset.embed) {
    const frame = document.createElement("iframe");
    frame.src = asset.embed;
    frame.title = `${asset.name} — embedded PowerPoint viewer`;
    frame.loading = "lazy";
    frame.setAttribute("allowfullscreen", "");
    preview.replaceChildren(frame);
    return;
  }

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

const buildAssetTile = (asset) => {
  const card = document.createElement("div");
  card.className = "tile";

  const preview = document.createElement("div");
  preview.className = "tile-preview";

  // Embedded viewers are interactive on their own; everything else gets the
  // click-to-open behavior on the preview area.
  if (asset.embed) {
    preview.classList.add("tile-preview-embed");
  } else {
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
  }

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

const buildNav = () => {
  sectionConfig.forEach((group) => {
    const groupWrap = document.createElement("div");
    groupWrap.className = "nav-group";

    const label = document.createElement("h2");
    label.className = "nav-label";
    label.textContent = group.group;

    const list = document.createElement("ul");
    list.className = "nav-list";

    group.sections.forEach((section) => {
      buildSection(section);

      const item = document.createElement("li");
      item.className = "nav-item";

      const link = document.createElement("a");
      link.className = "nav-link";
      link.href = `#${section.id}`;
      link.dataset.target = section.id;
      link.textContent = section.title;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById(section.id).scrollIntoView({ behavior: "smooth", block: "start" });
      });

      item.append(link);
      list.append(item);
    });

    groupWrap.append(label, list);
    navRoot.append(groupWrap);
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

const renderModalAsset = (asset) => {
  modalTitle.textContent = asset.name;
  pauseModalVideo();

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

  modalPreview.replaceChildren(createPlaceholder("Loading..."));

  const fullImage = new Image();
  fullImage.alt = asset.name;

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
  activeAssetIndex = index;
  renderModalAsset(allAssets[activeAssetIndex]);
  updateModalNavigation();

  modal.hidden = false;
  document.body.style.overflow = "hidden";
};

const openModal = (asset) => {
  const nextIndex = allAssets.indexOf(asset.modalTarget || asset);
  if (nextIndex === -1) return;
  openModalByIndex(nextIndex);
};

const stepModalAsset = (step) => {
  const nextIndex = activeAssetIndex + step;
  if (nextIndex < 0 || nextIndex >= allAssets.length) return;
  openModalByIndex(nextIndex);
};

const closeModal = () => {
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
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") return closeModal();
  if (event.key === "ArrowLeft") stepModalAsset(-1);
  if (event.key === "ArrowRight") stepModalAsset(1);
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
buildNav();
setupActiveNavigation();
