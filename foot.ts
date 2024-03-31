import {
  paletteHEX,
  grayHEX,
  fgHEX,
  bgHEX,
} from "./palette.ts"
import {
  NHHColor,
  NHHPaletteSet,
  hexToNoHashHex,
  transPaletteSet
} from "./deps.ts"

const p:NHHPaletteSet = transPaletteSet(paletteHEX, hexToNoHashHex);
const g: NHHColor[] = new Array(grayHEX.length);
for (let i = 0; i < grayHEX.length; i++) { g[i] = hexToNoHashHex(grayHEX[i]); }
const fg:NHHColor = hexToNoHashHex(fgHEX);
const bg:NHHColor = hexToNoHashHex(bgHEX);

console.log(
`# -*- conf -*-

shell=tmux
term=foot
# login-shell=no

# app-id=foot
# title=foot
# locked-title=no

font=Firge35 Nerd Console:size=7.5
# font-bold=<bold variant of regular font>
# font-italic=<italic variant of regular font>
# font-bold-italic=<bold+italic variant of regular font>
# line-height=<font metrics>
letter-spacing=0
horizontal-letter-offset=0
vertical-letter-offset=0
# underline-offset=<font metrics>
# box-drawings-uses-font-glyphs=no
dpi-aware=yes

# initial-window-size-pixels=700x500  # Or,
# initial-window-size-chars=<COLSxROWS>
# initial-window-mode=windowed
pad=0x0
# resize-delay-ms=100

# notify=notify-send -a \${app-id} -i \${app-id} \${title} \${body}

# bold-text-in-bright=no
# word-delimiters=,│\`|:"'()[]{}<>
# selection-target=primary
# workers=<number of logical CPUs>

[bell]
# urgent=no
# notify=no
# command=
# command-focused=no

[scrollback]
# lines=1000
# multiplier=3.0
# indicator-position=relative
# indicator-format=

[url]
# launch=xdg-open \${url}
# label-letters=sadfjklewcmpgh
# osc8-underline=url-mode
# protocols=http, https, ftp, ftps, file, gemini, gopher
# uri-characters=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.,~:;/?#@!$&%*+="'()[]

[cursor]
style=underline
# color=<inverse foreground/background>
# blink=no
# beam-thickness=1.5
underline-thickness=1

[mouse]
hide-when-typing=yes
# alternate-scroll-mode=yes

[colors]
# alpha=1.0
foreground=${fg}
background=${bg}

## Normal/regular colors (color palette 0-7)
regular0=${g[3]}
regular1=${p.std.r}
regular2=${p.std.g}
regular3=${p.std.y}
regular4=${p.std.b}
regular5=${p.std.m}
regular6=${p.std.c}
regular7=${g[13]}

## Bright colors (color palette 8-15)
bright0=${g[4]}
bright1=${p.light.r}
bright2=${p.light.g}
bright3=${p.light.y}
bright4=${p.light.b}
bright5=${p.light.m}
bright6=${p.light.c}
bright7=${g[15]}

## dimmed colors (see foot.ini(5) man page)
# dim0=<not set>
# ...
# dim7=<not-set>

## The remaining 256-color palette
# 16 = <256-color palette #16>
# ...
# 255 = <256-color palette #255>

## Misc colors
# selection-foreground=<inverse foreground/background>
# selection-background=<inverse foreground/background>
# jump-labels=<regular0> <regular3>
# urls=<regular3>
# scrollback-indicator=<regular0> <bright4>

[csd]
# preferred=server
# size=26
# font=<primary font>
# color=<foreground color>
# hide-when-typing=no
# border-width=0
# border-color=<csd.color>
# button-width=26
# button-color=<background color>
# button-minimize-color=<regular4>
# button-maximize-color=<regular2>
# button-close-color=<regular1>

[key-bindings]
# scrollback-up-page=Shift+Page_Up
# scrollback-up-half-page=none
# scrollback-up-line=none
# scrollback-down-page=Shift+Page_Down
# scrollback-down-half-page=none
# scrollback-down-line=none
# clipboard-copy=Control+Shift+c XF86Copy
# clipboard-paste=Control+Shift+v XF86Paste
# primary-paste=Shift+Insert
# search-start=Control+Shift+r
# font-increase=Control+plus Control+equal Control+KP_Add
# font-decrease=Control+minus Control+KP_Subtract
# font-reset=Control+0 Control+KP_0
# spawn-terminal=Control+Shift+n
# minimize=none
# maximize=none
# fullscreen=none
# pipe-visible=[sh -c "xurls | fuzzel | xargs -r firefox"] none
# pipe-scrollback=[sh -c "xurls | fuzzel | xargs -r firefox"] none
# pipe-selected=[xargs -r firefox] none
# show-urls-launch=Control+Shift+u
# show-urls-copy=none
# show-urls-persistent=none
# noop=none

[search-bindings]
# cancel=Control+g Control+c Escape
# commit=Return
# find-prev=Control+r
# find-next=Control+s
# cursor-left=Left Control+b
# cursor-left-word=Control+Left Mod1+b
# cursor-right=Right Control+f
# cursor-right-word=Control+Right Mod1+f
# cursor-home=Home Control+a
# cursor-end=End Control+e
# delete-prev=BackSpace
# delete-prev-word=Mod1+BackSpace Control+BackSpace
# delete-next=Delete
# delete-next-word=Mod1+d Control+Delete
# extend-to-word-boundary=Control+w
# extend-to-next-whitespace=Control+Shift+w
# clipboard-paste=Control+v Control+Shift+v Control+y XF86Paste
# primary-paste=Shift+Insert

[url-bindings]
# cancel=Control+g Control+c Control+d Escape
# toggle-url-visible=t

[text-bindings]
# \\x03=Mod4+c  # Map Super+c -> Ctrl+c

[mouse-bindings]
# selection-override-modifiers=Shift
# primary-paste=BTN_MIDDLE
# select-begin=BTN_LEFT
# select-begin-block=Control+BTN_LEFT
# select-extend=BTN_RIGHT
# select-extend-character-wise=Control+BTN_RIGHT
# select-word=BTN_LEFT-2
# select-word-whitespace=Control+BTN_LEFT-2
# select-row=BTN_LEFT-3

[tweak]
max-shm-pool-size-mb=256

# vim: ft=dosini`
)
