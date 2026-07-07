import type { IMThemeVariables } from 'jimu-core'
import type { ComponentStyleOverrides } from 'jimu-theme'

export const CssBaseline: ComponentStyleOverrides<'CssBaseline', IMThemeVariables> = {
  root: ({ styleState }) => {
    const rootUrl = styleState.rootUrl || ''
    const rootBase = rootUrl && !rootUrl.endsWith('/') ? `${rootUrl}/` : rootUrl
    return `
      /* Nippo */
      @font-face {
        font-family: 'Nippo';
        src: url('${rootBase}themes/sci-fi/assets/fonts/nippo/Nippo-Variable.ttf') format('truetype');
        font-style: normal;
      }
    `
  }
}

const createSciFiButtonMaskUrl = () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="184" height="64" viewBox="0 0 184 64" preserveAspectRatio="none" shape-rendering="geometricPrecision" fill="#000000"><path d="M0 0H172L184 12V64H12L0 52V0Z"/><path d="M0 56L8 64H0L0 56Z"/></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const createSciFiButtonDecorUrl = (strokeColor = '#ffffff') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="184" height="64" viewBox="0 0 184 64" preserveAspectRatio="none" shape-rendering="geometricPrecision" fill="${strokeColor}"><rect width="13.4" height="2"/><rect width="51.386" height="2" transform="matrix(0 -1 -1 0 2 51.986)"/><path d="M0 56L8 64H0L0 56Z"/><path d="M0 52L1.414 50.586L13.414 62.586L12 64L0 52Z"/><path d="M12 0V2H172V0V-2H12V0Z"/><rect x="12" y="62" width="172" height="2"/><path d="M60 0H124L116 8H68L60 0Z"/><rect width="51.386" height="2" transform="matrix(0 1 1 0 182 12.014)"/><path d="M170.586 1.414L172 0L184 12L182.586 13.414L170.586 1.414Z"/></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const Button: ComponentStyleOverrides<'Button', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const asLink = styleState?.asLink || styleState?.type === 'link'
    const variant = styleState?.variant
    const sysColor = theme.sys.color
    const isSciFiButton = !asLink && variant !== 'text' && !styleState?.icon && !styleState?.unstyled
    const neutralPalette = theme.ref?.palette?.neutral
    const decorStroke = sysColor.mode === 'light'
      ? (neutralPalette?.['1000'])
      : (neutralPalette?.['100'])
    const shapeMask = createSciFiButtonMaskUrl()
    const decorBg = createSciFiButtonDecorUrl(decorStroke)

    const sciFiBase = isSciFiButton ? {
      position: 'relative' as const,
      overflow: 'visible' as const,
      borderRadius: 0,
      border: 'none !important',
      backgroundImage: `${decorBg} !important`,
      backgroundRepeat: 'no-repeat !important',
      backgroundSize: '100% 100% !important',
      backgroundPosition: 'center !important',
      WebkitMaskImage: shapeMask,
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskSize: '100% 100%',
      WebkitMaskPosition: 'center',
      maskImage: shapeMask,
      maskRepeat: 'no-repeat',
      maskSize: '100% 100%',
      maskPosition: 'center',
    } : {}

    return sciFiBase
  }
}

const radioHexagonClipPath = 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'

const Radio: ComponentStyleOverrides<'Radio', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const disabled = !!styleState?.disabled
    const strokeColor = disabled ? sysColor.action.disabled.text : sysColor.action.inputField.text
    const backgroundColor = disabled ? sysColor.action.disabled.default : sysColor.action.inputField.default

    return {
      position: 'relative',
      isolation: 'isolate',
      borderRadius: 0,
      border: 'none',
      clipPath: radioHexagonClipPath,
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        clipPath: radioHexagonClipPath,
        background: strokeColor,
        zIndex: 0,
        pointerEvents: 'none'
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: '1px',
        clipPath: radioHexagonClipPath,
        background: backgroundColor,
        zIndex: 0,
        pointerEvents: 'none'
      }
    }
  },
  pointer: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const disabled = !!styleState?.disabled

    return {
      position: 'relative',
      zIndex: 1,
      width: '10px',
      height: '10px',
      marginBlockStart: 'calc(-5px)',
      marginInlineStart: 'calc(-5px)',
      borderRadius: 0,
      background: disabled ? sysColor.action.disabled.text : sysColor.action.selected.default,
      clipPath: radioHexagonClipPath
    }
  }
}

const toAlphaColor = (color: string, alpha: number) => {
  const alphaPercent = Math.max(0, Math.min(1, alpha)) * 100
  return `color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`
}

const createSwitchTrackFrameUrl = (size: 'default' | 'sm', strokeColor: string) => {
  const svg = size === 'sm'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" preserveAspectRatio="none"><polygon points="4,0.5 24,0.5 27.5,8 24,15.5 4,15.5 0.5,8" fill="none" stroke="${strokeColor}" stroke-width="1"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 36 20" preserveAspectRatio="none"><polygon points="5,0.5 31,0.5 35.5,10 31,19.5 5,19.5 0.5,10" fill="none" stroke="${strokeColor}" stroke-width="1"/></svg>`

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const createSwitchKnobFrameUrl = (size: 'default' | 'sm', fillColor: string) => {
  const svg = size === 'sm'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" preserveAspectRatio="none"><polygon points="3.25,2.237 8.75,2.237 11.5,7 8.75,11.763 3.25,11.763 0.5,7" fill="${fillColor}"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" preserveAspectRatio="none"><polygon points="3.75,2.371 10.25,2.371 13.5,8 10.25,13.629 3.75,13.629 0.5,8" fill="${fillColor}"/></svg>`

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const Switch: ComponentStyleOverrides<'Switch', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const size = styleState?.size === 'sm' ? 'sm' : 'default'
    const checked = !!styleState?.checked
    const disabled = !!styleState?.disabled
    const strokeColor = disabled
      ? sysColor.action.disabled.text
      : checked
        ? sysColor.action.inputField.text
        : sysColor.divider.switch
    const frameBg = createSwitchTrackFrameUrl(size, strokeColor)

    return {
      position: 'relative',
      width: size === 'sm' ? '28px' : '36px',
      height: size === 'sm' ? '16px' : '20px',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      background: disabled ? sysColor.action.disabled.default : sysColor.action.inputField.default,
      clipPath: size === 'sm'
        ? 'polygon(4px 0px, 24px 0px, 28px 8px, 24px 16px, 4px 16px, 0px 8px)'
        : 'polygon(5px 0px, 31px 0px, 36px 10px, 31px 20px, 5px 20px, 0px 10px)',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: frameBg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        pointerEvents: 'none'
      },
      ...(!disabled ? {
        '&:hover': {
          background: toAlphaColor('#000000', 0.05)
        },
        '&:active': {
          background: toAlphaColor('#000000', 0.15)
        }
      } : {}),
      '&.jimu-interactive-node:focus-within': {
        outline: `2px solid ${sysColor.action.focus}`,
        outlineOffset: '2px'
      }
    }
  },
  slider: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const size = styleState?.size === 'sm' ? 'sm' : 'default'
    const checked = !!styleState?.checked
    const disabled = !!styleState?.disabled
    const knobFillColor = disabled
      ? sysColor.action.disabled.text
      : checked
        ? sysColor.action.selected.default
        : sysColor.action.inputField.text
    const knobBg = createSwitchKnobFrameUrl(size, knobFillColor)

    return {
      position: 'absolute',
      insetBlockStart: '50%',
      insetInlineStart: size === 'sm' ? '3px' : '4px',
      width: size === 'sm' ? '12px' : '14px',
      height: size === 'sm' ? '14px' : '16px',
      margin: 0,
      background: 'transparent',
      borderRadius: 0,
      backgroundImage: knobBg,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      transform: checked
        ? `translate(${size === 'sm' ? '10px' : '14px'}, -50%)`
        : 'translate(0, -50%)',
      transition: theme.sys.transitions.create(['transform'], { duration: 'shortest' }),
      pointerEvents: 'none'
    }
  }
}

const Checkbox: ComponentStyleOverrides<'Checkbox', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const indeterminate = styleState?.indeterminate
    const disabled = styleState?.disabled
    const checked = styleState?.checked

    return {
      backgroundColor: sysColor.action.inputField.default,
      border: `1px solid ${sysColor.action.inputField.text}`,
      borderRadius: 0,
      position: 'relative',
      ...(indeterminate ? {
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '11px',
          height: '2px',
          backgroundColor: sysColor.action.selected.default
        },
      } : {}),
      ...(checked && !disabled && !indeterminate ? {
        '&::after': {
          content: '""',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '8px',
          height: '8px',
          backgroundColor: sysColor.primary.main,
          borderRadius: '1px'
        },
      } : {})
    }
  },
  icon: ({ styleState }) => {
    if (styleState?.checked || styleState?.indeterminate) {
      return {
        opacity: 0
      }
    }
  }
}

const Alert: ComponentStyleOverrides<'Alert', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const type = styleState?.type || 'warning'
    const isBanner = !!styleState?.banner
    const severity = sysColor[type] || sysColor.warning
    const isDark = sysColor.mode === 'dark'
    const accentColor = severity.main
    const titleColor = isDark ? sysColor.surface.overlayText : severity.main
    const bodyColor = isDark ? sysColor.surface.overlayText : sysColor.surface.backgroundText
    const backgroundColor = toAlphaColor(severity.main, isDark ? 0.25 : 0.05)
    const cornerColor = isDark ? toAlphaColor(sysColor.surface.overlayText, 0.55) : toAlphaColor(sysColor.surface.backgroundText, 0.55)

    return {
      position: 'relative',
      border: 'none',
      borderRadius: 0,
      background: backgroundColor,
      backdropFilter: 'blur(25px)',
      WebkitBackdropFilter: 'blur(25px)',
      color: bodyColor,
      overflow: 'visible',
      ...(!isBanner ? {
        '&::after': {
          content: '""',
          position: 'absolute',
          insetBlockStart: '8px',
          insetBlockEnd: '8px',
          insetInlineStart: '-5px',
          width: '3px',
          background: accentColor,
          pointerEvents: 'none'
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          insetBlockStart: '-4px',
          insetBlockEnd: '-4px',
          insetInlineStart: '-4px',
          width: '14px',
          boxSizing: 'border-box',
          borderInlineStart: `1px solid ${cornerColor}`,
          borderBlockStart: `1px solid ${cornerColor}`,
          borderBlockEnd: `1px solid ${cornerColor}`,
          pointerEvents: 'none'
        }
      } : {}),
      '.jimu-alert-panel-title': {
        color: titleColor,
        borderBottom: `1px solid ${accentColor}`
      },
      '.jimu-alert-panel-description': {
        color: bodyColor,
      }
    }
  },
  icon: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const type = styleState?.type || 'warning'
    const severity = sysColor[type] || sysColor.warning
    const iconColor = sysColor.mode === 'dark' ? sysColor.surface.overlayText : severity.main

    return {
      '.severity-icon': {
        color: iconColor,
      }
    }
  },
  action: ({ theme }) => {
    const sysColor = theme.sys.color
    const actionColor = sysColor.mode === 'dark' ? sysColor.surface.overlayText : sysColor.surface.backgroundText

    return {
      color: actionColor,
      '.jimu-button': {
        color: actionColor,
        '&:hover': {
          color: actionColor
        }
      }
    }
  }
}

export { Button, Radio, Switch, Checkbox, Alert }
