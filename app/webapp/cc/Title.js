// Invisible control that sets the browser tab title from its bound
// `title` property.
sap.ui.define(["sap/ui/core/Control", "sctau5/core/Lib"], (Control, Lib) => {
  "use strict";
  // OBSOLETE: replaced by the frontend event cs_event-set_title - kept for backward compatibility.
  return Control.extend("sctau5.cc.Title", {
    metadata: {
      properties: {
        title: {
          type: "string",
        },
      },
    },
    setTitle(val) {
      // Empty renderer -> suppress the no-op invalidation; the effect below
      // (setting the tab title) is what actually matters.
      this.setProperty("title", val, true);
      document.title = Lib.toText(val);
    },
    renderer: Lib.EMPTY_RENDERER,
  });
});
