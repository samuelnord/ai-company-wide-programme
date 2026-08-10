/* @ds-bundle: {"format":4,"namespace":"NordDesignSystem_c3d703","components":[{"name":"CloudTag","sourcePath":"components/badges/CloudTag.jsx"},{"name":"PillBadge","sourcePath":"components/badges/PillBadge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ChapterSlide","sourcePath":"components/slides/ChapterSlide.jsx"},{"name":"ClosingSlide","sourcePath":"components/slides/ClosingSlide.jsx"},{"name":"CoverSlide","sourcePath":"components/slides/CoverSlide.jsx"},{"name":"SectionCoverSlide","sourcePath":"components/slides/SectionCoverSlide.jsx"},{"name":"SlideFrame","sourcePath":"components/slides/SlideFrame.jsx"},{"name":"StatGridSlide","sourcePath":"components/slides/StatGridSlide.jsx"},{"name":"StatementSlide","sourcePath":"components/slides/StatementSlide.jsx"},{"name":"TableSlide","sourcePath":"components/slides/TableSlide.jsx"},{"name":"StatBlock","sourcePath":"components/stats/StatBlock.jsx"},{"name":"StatSplit","sourcePath":"components/stats/StatSplit.jsx"},{"name":"NoGoBlockquote","sourcePath":"components/surfaces/NoGoBlockquote.jsx"},{"name":"TerminalWindow","sourcePath":"components/surfaces/TerminalWindow.jsx"}],"sourceHashes":{"components/badges/CloudTag.jsx":"b7c42c4dbd40","components/badges/PillBadge.jsx":"a61ec8488abf","components/data/DataTable.jsx":"53128f85e92b","components/slides/ChapterSlide.jsx":"d0390bb5c399","components/slides/ClosingSlide.jsx":"c55bb3f50881","components/slides/CoverSlide.jsx":"8eaa0cb8e839","components/slides/SectionCoverSlide.jsx":"70e2b93ab96f","components/slides/SlideFrame.jsx":"bd1a08871784","components/slides/StatGridSlide.jsx":"178f9e591f60","components/slides/StatementSlide.jsx":"3b21291af352","components/slides/TableSlide.jsx":"d156aee20e19","components/stats/StatBlock.jsx":"4ec752560168","components/stats/StatSplit.jsx":"b0bb1518e418","components/surfaces/NoGoBlockquote.jsx":"837f16a097c9","components/surfaces/TerminalWindow.jsx":"157937a502f2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NordDesignSystem_c3d703 = window.NordDesignSystem_c3d703 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/CloudTag.jsx
try { (() => {
function CloudTag({
  children
}) {
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '3px 10px',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--color-secondary)',
    color: 'var(--color-secondary-fg)',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: 'var(--tracking-normal)'
  };
  return React.createElement('span', {
    style
  }, children);
}
Object.assign(__ds_scope, { CloudTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/CloudTag.jsx", error: String((e && e.message) || e) }); }

// components/badges/PillBadge.jsx
try { (() => {
const TONES = {
  primary: {
    bg: 'var(--color-primary)',
    fg: 'var(--color-primary-fg)'
  },
  secondary: {
    bg: 'var(--color-secondary)',
    fg: 'var(--color-secondary-fg)'
  },
  nogo: {
    bg: 'var(--color-nogo)',
    fg: 'var(--color-nogo-fg)'
  },
  neutral: {
    bg: 'transparent',
    fg: 'var(--color-fg)'
  }
};
function PillBadge({
  children,
  tone = 'primary',
  variant = 'filled'
}) {
  const t = TONES[tone] || TONES.primary;
  const filled = variant === 'filled' && tone !== 'neutral';
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--weight-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    background: filled ? t.bg : 'transparent',
    color: filled ? t.fg : t.bg === 'transparent' ? 'var(--color-muted-fg)' : t.bg,
    border: filled ? 'none' : `var(--border-width) solid ${tone === 'neutral' ? 'var(--color-border)' : t.bg}`
  };
  return React.createElement('span', {
    style
  }, children);
}
Object.assign(__ds_scope, { PillBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/PillBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns,
  rows,
  firstColTint = true
}) {
  const cellStyle = {
    padding: '10px 14px',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    borderBottom: 'var(--border-width) solid var(--color-border)',
    textAlign: 'left'
  };
  return React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--color-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map((c, i) => React.createElement('th', {
    key: i,
    style: {
      ...cellStyle,
      background: 'var(--color-muted)',
      color: 'var(--color-muted-fg)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      fontSize: 'var(--text-xs)'
    }
  }, c)))), React.createElement('tbody', null, rows.map((row, ri) => React.createElement('tr', {
    key: ri
  }, row.map((cell, ci) => React.createElement('td', {
    key: ci,
    style: {
      ...cellStyle,
      color: ci === 0 && firstColTint ? 'var(--color-primary)' : 'var(--color-fg)',
      fontWeight: ci === 0 && firstColTint ? 'var(--weight-medium)' : 'var(--weight-regular)'
    }
  }, cell))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/slides/SlideFrame.jsx
try { (() => {
function SlideFrame({
  children,
  pageNumber,
  totalPages,
  wordmark = 'NORD',
  theme = 'light'
}) {
  const bracket = {
    position: 'absolute',
    width: '28px',
    height: '28px',
    borderColor: 'var(--color-primary)',
    borderStyle: 'solid',
    borderWidth: 0
  };
  return React.createElement('div', {
    'data-theme': theme,
    style: {
      position: 'relative',
      width: '1280px',
      height: '720px',
      background: 'var(--color-bg)',
      fontFamily: 'var(--font-display)',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }
  }, React.createElement('span', {
    style: {
      ...bracket,
      top: '24px',
      left: '24px',
      borderTopWidth: 'var(--frame-stroke)',
      borderLeftWidth: 'var(--frame-stroke)'
    }
  }), React.createElement('span', {
    style: {
      ...bracket,
      bottom: '24px',
      left: '24px',
      borderBottomWidth: 'var(--frame-stroke)',
      borderLeftWidth: 'var(--frame-stroke)'
    }
  }), React.createElement('span', {
    style: {
      ...bracket,
      bottom: '24px',
      right: '24px',
      borderBottomWidth: 'var(--frame-stroke)',
      borderRightWidth: 'var(--frame-stroke)'
    }
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: '32px',
      left: '48px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--color-muted-fg)'
    }
  }, wordmark), pageNumber != null && React.createElement('div', {
    style: {
      position: 'absolute',
      bottom: '32px',
      right: '48px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--color-muted-fg)'
    }
  }, `${String(pageNumber).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      padding: '96px 96px',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, children));
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/slides/ChapterSlide.jsx
try { (() => {
function ChapterSlide({
  eyebrow,
  title,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      height: '10px',
      width: '120px',
      background: 'var(--color-secondary)',
      marginBottom: 'var(--space-6)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--color-secondary)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)'
    }
  }, title));
}
Object.assign(__ds_scope, { ChapterSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/ChapterSlide.jsx", error: String((e && e.message) || e) }); }

// components/slides/ClosingSlide.jsx
try { (() => {
function ClosingSlide({
  heading,
  subheading,
  contact,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 'var(--space-4)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)'
    }
  }, heading), subheading && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      color: 'var(--color-muted-fg)'
    }
  }, subheading), contact && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-primary)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      marginTop: 'var(--space-3)'
    }
  }, contact)));
}
Object.assign(__ds_scope, { ClosingSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/ClosingSlide.jsx", error: String((e && e.message) || e) }); }

// components/slides/CoverSlide.jsx
try { (() => {
function CoverSlide({
  title,
  subtitle,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      display: 'flex',
      height: '100%'
    }
  }, React.createElement('div', {
    style: {
      width: '6px',
      background: 'var(--color-primary)',
      marginRight: 'var(--space-6)'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'var(--space-3)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-5xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)'
    }
  }, title), subtitle && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      color: 'var(--color-muted-fg)'
    }
  }, subtitle))));
}
Object.assign(__ds_scope, { CoverSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/CoverSlide.jsx", error: String((e && e.message) || e) }); }

// components/slides/SectionCoverSlide.jsx
try { (() => {
function SectionCoverSlide({
  number,
  title,
  description,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      height: '100%'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-6xl)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--color-primary)'
    }
  }, number), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)'
    }
  }, title), description && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      color: 'var(--color-muted-fg)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description))));
}
Object.assign(__ds_scope, { SectionCoverSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/SectionCoverSlide.jsx", error: String((e && e.message) || e) }); }

// components/slides/StatementSlide.jsx
try { (() => {
function StatementSlide({
  statement,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-4xl)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--color-fg)',
      maxWidth: '900px'
    }
  }, statement)));
}
Object.assign(__ds_scope, { StatementSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/StatementSlide.jsx", error: String((e && e.message) || e) }); }

// components/slides/TableSlide.jsx
try { (() => {
function TableSlide({
  title,
  columns,
  rows,
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)',
      marginBottom: 'var(--space-6)'
    }
  }, title), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(__ds_scope.DataTable, {
    columns,
    rows
  })));
}
Object.assign(__ds_scope, { TableSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/TableSlide.jsx", error: String((e && e.message) || e) }); }

// components/stats/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  tone = 'primary'
}) {
  const color = tone === 'secondary' ? 'var(--color-secondary)' : tone === 'neutral' ? 'var(--color-fg)' : 'var(--color-primary)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-medium)',
      color,
      lineHeight: 'var(--leading-tight)'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--color-muted-fg)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/slides/StatGridSlide.jsx
try { (() => {
function StatGridSlide({
  title,
  stats = [],
  pageNumber,
  totalPages,
  theme
}) {
  return React.createElement(__ds_scope.SlideFrame, {
    pageNumber,
    totalPages,
    theme
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)',
      marginBottom: 'var(--space-7)'
    }
  }, title), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      gap: 'var(--space-6)',
      flex: 1,
      alignContent: 'center'
    }
  }, stats.map((s, i) => React.createElement(__ds_scope.StatBlock, {
    key: i,
    value: s.value,
    label: s.label,
    tone: s.tone || (i % 2 === 0 ? 'primary' : 'secondary')
  }))));
}
Object.assign(__ds_scope, { StatGridSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/StatGridSlide.jsx", error: String((e && e.message) || e) }); }

// components/stats/StatSplit.jsx
try { (() => {
function StatSplit({
  eyebrow,
  title,
  body,
  statValue,
  statLabel,
  tone = 'primary'
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 'var(--space-6)'
    }
  }, React.createElement('div', {
    style: {
      borderRight: 'var(--border-width) solid var(--color-border)',
      paddingRight: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, eyebrow && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--color-muted-fg)'
    }
  }, eyebrow), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-2xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-fg)'
    }
  }, title), body && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-muted-fg)',
      lineHeight: 'var(--leading-normal)'
    }
  }, body)), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, React.createElement(__ds_scope.StatBlock, {
    value: statValue,
    label: statLabel,
    tone
  })));
}
Object.assign(__ds_scope, { StatSplit });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/stats/StatSplit.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/NoGoBlockquote.jsx
try { (() => {
function NoGoBlockquote({
  children
}) {
  return React.createElement('div', {
    style: {
      borderLeft: 'var(--frame-stroke) solid var(--color-nogo)',
      paddingLeft: 'var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      color: 'var(--color-fg)',
      lineHeight: 'var(--leading-normal)'
    }
  }, React.createElement('span', {
    style: {
      fontWeight: 'var(--weight-bold)',
      color: 'var(--color-nogo)'
    }
  }, 'No-go: '), children);
}
Object.assign(__ds_scope, { NoGoBlockquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/NoGoBlockquote.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TerminalWindow.jsx
try { (() => {
function TerminalWindow({
  title = 'terminal',
  lines = [],
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-card)',
      border: 'var(--border-width) solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      fontFamily: 'var(--font-mono)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      borderBottom: 'var(--border-width) solid var(--color-border)'
    }
  }, React.createElement('span', {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--color-nogo)'
    }
  }), React.createElement('span', {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--color-secondary)'
    }
  }), React.createElement('span', {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'var(--color-success)'
    }
  }), React.createElement('span', {
    style: {
      marginLeft: '8px',
      fontSize: 'var(--text-xs)',
      color: 'var(--color-muted-fg)'
    }
  }, title)), React.createElement('div', {
    style: {
      padding: '16px',
      fontSize: 'var(--text-sm)',
      color: 'var(--color-fg)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, lines.map((l, i) => React.createElement('div', {
    key: i
  }, l)), children));
}
Object.assign(__ds_scope, { TerminalWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TerminalWindow.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CloudTag = __ds_scope.CloudTag;

__ds_ns.PillBadge = __ds_scope.PillBadge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ChapterSlide = __ds_scope.ChapterSlide;

__ds_ns.ClosingSlide = __ds_scope.ClosingSlide;

__ds_ns.CoverSlide = __ds_scope.CoverSlide;

__ds_ns.SectionCoverSlide = __ds_scope.SectionCoverSlide;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.StatGridSlide = __ds_scope.StatGridSlide;

__ds_ns.StatementSlide = __ds_scope.StatementSlide;

__ds_ns.TableSlide = __ds_scope.TableSlide;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatSplit = __ds_scope.StatSplit;

__ds_ns.NoGoBlockquote = __ds_scope.NoGoBlockquote;

__ds_ns.TerminalWindow = __ds_scope.TerminalWindow;

})();
