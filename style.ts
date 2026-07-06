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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="165" height="61" viewBox="0 0 165 61" preserveAspectRatio="none"><path d="M159.5 0.5V26.7539L149.0397 55.5H0.5V11.2432L4.4092 0.5H159.5Z" fill="#000000"/><path d="M117 59.5H150.9938L163.633 28.5747L163.5 1.5" stroke="#000000" stroke-width="1.5" fill="none"/><circle cx="163.5" cy="1" r="1" fill="#000000"/><path d="M118.418 58.5L115.829 60.5H68.709L66.6699 58.5H118.418ZM65.4932 60L65.9932 60.5H65.4072L64.9072 60H65.4932ZM62.4932 60L62.9932 60.5H62.4072L61.9072 60H62.4932ZM59.4932 60L59.9932 60.5H59.4072L58.9072 60H59.4932Z" fill="#000000" stroke="#000000" stroke-width="1.2"/></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const createSciFiButtonDecorUrl = (strokeColor = '#ffffff') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="165" height="61" viewBox="0 0 165 61" preserveAspectRatio="none" fill="none"><path d="M159.5 0.5V26.7539L149.0397 55.5H0.5V11.2432L4.4092 0.5H159.5Z" stroke="${strokeColor}" stroke-width="2" stroke-linejoin="miter"/><path d="M117 59.5H150.9938L163.633 28.5747L163.5 1.5" stroke="${strokeColor}" stroke-width="2" fill="none"/><circle cx="163.5" cy="1" r="1" fill="${strokeColor}"/><path d="M118.418 58.5L115.829 60.5H68.709L66.6699 58.5H118.418ZM65.4932 60L65.9932 60.5H65.4072L64.9072 60H65.4932ZM62.4932 60L62.9932 60.5H62.4072L61.9072 60H62.4932ZM59.4932 60L59.9932 60.5H59.4072L58.9072 60H59.4932Z" fill="${strokeColor}" stroke="${strokeColor}" stroke-width="1.5"/></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
}

const toAlphaColor = (color: string, alpha: number) => {
  const alphaPercent = Math.max(0, Math.min(1, alpha)) * 100
  return `color-mix(in srgb, ${color} ${alphaPercent}%, transparent)`
}

const createRadioHexagonFrameUrl = (strokeColor: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="none"><polygon points="6,1.608 18,1.608 24,12 18,22.392 6,22.392 0,12" fill="none" stroke="${strokeColor}" stroke-width="2"/></svg>`
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`
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

const radioHexagonClipPath24 = 'polygon(6px 1.608px, 18px 1.608px, 24px 12px, 18px 22.392px, 6px 22.392px, 0px 12px)'
const radioHexagonClipPath16 = 'polygon(4px 1.072px, 12px 1.072px, 16px 8px, 12px 14.928px, 4px 14.928px, 0px 8px)'

type SemanticColorKey = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'

const semanticKeyMap = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
  danger: 'error',
  tertiary: 'secondary',
  default: 'primary',
  inherit: 'primary'
} as const satisfies { [key: string]: SemanticColorKey }

const normalizeSemanticKey = (value?: string): SemanticColorKey | undefined => {
  return value && value in semanticKeyMap
    ? semanticKeyMap[value as keyof typeof semanticKeyMap]
    : undefined
}

const Button: ComponentStyleOverrides<'Button', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const size = styleState?.size
    const asLink = styleState?.asLink || styleState?.type === 'link'
    const variant = styleState?.variant
    const color = styleState?.color
    const buttonType = styleState?.type
    const sysColor = theme.sys.color
    const colorKey = normalizeSemanticKey(color)
    const typeKey = normalizeSemanticKey(buttonType)
    const explicitColorKey = color && !['default', 'inherit'].includes(color) ? colorKey : undefined
    const semanticKey = typeKey || explicitColorKey || 'primary'
    const resolvedSemantic = (sysColor[semanticKey] || sysColor.primary)
    const isDefaultInherit = ['default', 'inherit'].includes(color)
    const mainFillColor = resolvedSemantic.main
    const hoverFillColor = resolvedSemantic.dark || resolvedSemantic.main
    const textOnFillColor = resolvedSemantic.text || sysColor.action.text
    const mainTextColor = isDefaultInherit ? sysColor.primary.light : resolvedSemantic.main
    const disabledText = isDefaultInherit ? sysColor.action.disabled.text : resolvedSemantic.text
    const disabledMain = isDefaultInherit ? sysColor.action.disabled.default : resolvedSemantic.main
    const isSciFiButton = !asLink && variant !== 'text' && !styleState?.icon && !styleState?.unstyled
    const frameStroke = '#ffffff'
    const shapeMask = createSciFiButtonMaskUrl()
    const decorBg = createSciFiButtonDecorUrl(frameStroke)

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
      transition: 'border-color 120ms ease, background-color 120ms ease, color 120ms ease',
      isolation: 'isolate' as const,
      paddingInline: '16px',
      boxShadow: 'none !important',
      '&.jimu-interactive-node:focus-within': {
        outline: `2px solid ${frameStroke}`,
        outlineOffset: '2px',
        boxShadow: 'none'
      }
    } : {}

    const variantStyles = isSciFiButton
      ? variant === 'contained'
        ? {
          backgroundColor: mainFillColor,
          borderColor: 'transparent',
          color: textOnFillColor,
          boxShadow: 'none',
          '&:hover': { backgroundColor: hoverFillColor },
          '&:active': { backgroundColor: hoverFillColor }
        }
        : variant === 'outlined'
          ? {
            backgroundColor: toAlphaColor(mainFillColor, 0.55),
            borderColor: 'transparent',
            color: mainTextColor,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: toAlphaColor(hoverFillColor, 0.72),
              color: textOnFillColor
            },
            '&:active': { backgroundColor: toAlphaColor(hoverFillColor, 0.82) }
          }
          : {}
      : {}

    const disabledStyles = isSciFiButton
      ? variant === 'contained'
        ? {
          '&.jimu-disabled': {
            color: disabledText,
            backgroundColor: disabledMain,
            borderColor: 'transparent',
            boxShadow: 'none',
            opacity: 0.5
          }
        }
        : variant === 'outlined'
          ? {
            '&.jimu-disabled': {
              color: isDefaultInherit ? sysColor.action.disabled.text : resolvedSemantic.main,
              backgroundColor: toAlphaColor(disabledMain, 0.4),
              borderColor: 'transparent',
              boxShadow: 'none',
              opacity: 0.5
            }
          }
          : {}
      : {}

    return {
      ...sciFiBase,
      ...variantStyles,
      ...disabledStyles,
      ...(asLink ? {
        color: sysColor.action.link.default,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: `color-mix(in srgb, ${sysColor.action.link.default} 50%, transparent)`,
        '&:hover': {
          color: sysColor.action.link.default,
          textDecorationColor: sysColor.action.link.default
        },
        '&.jimu-disabled': {
          color: `color-mix(in srgb, ${sysColor.action.link.default} 50%, transparent)`,
          textDecorationColor: `color-mix(in srgb, ${sysColor.action.link.default} 50%, transparent)`
        }
      } : {}),
      ...(size === 'lg' ? {
        paddingTop: '10px',
        paddingBottom: '10px'
      } : {}),
      '.touch-ripple-root .ripple.ripple-visible': {
        animation: 'none !important',
        transform: 'scale(1) !important',
        opacity: '0.08 !important'
      }
    }
  }
}

const Radio: ComponentStyleOverrides<'Radio', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const disabled = !!styleState?.disabled
    const strokeColor = disabled ? sysColor.action.disabled.text : sysColor.action.inputField.text
    const frameBg = createRadioHexagonFrameUrl(strokeColor)

    return {
      position: 'relative',
      width: '24px',
      height: '24px',
      borderRadius: 0,
      border: 'none',
      background: disabled ? sysColor.action.disabled.default : sysColor.action.inputField.default,
      clipPath: radioHexagonClipPath24,
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: frameBg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        pointerEvents: 'none'
      }
    }
  },
  pointer: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const disabled = !!styleState?.disabled

    return {
      width: '16px',
      height: '16px',
      marginBlockStart: '-8px',
      marginInlineStart: '-8px',
      borderRadius: 0,
      background: disabled ? sysColor.action.disabled.text : sysColor.action.selected.default,
      clipPath: radioHexagonClipPath16
    }
  }
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

const Alert: ComponentStyleOverrides<'Alert', IMThemeVariables> = {
  root: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const type = styleState?.type || 'warning'
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
      padding: theme.sys.spacing(4),
      paddingInlineStart: theme.sys.spacing(5),
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: theme.sys.spacing(4),
      background: backgroundColor,
      backdropFilter: 'blur(25px)',
      WebkitBackdropFilter: 'blur(25px)',
      color: bodyColor,
      overflow: 'visible',
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
      },
      '.jimu-alert-panel-left-part': {
        flex: '1 1 auto',
        width: '100%',
        marginRight: '0 !important',
        alignItems: 'flex-start',
        gap: theme.sys.spacing(4)
      },
      '.jimu-alert-panel-title': {
        color: titleColor,
        fontFamily: 'Nippo, sans-serif',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '27px',
        marginBottom: theme.sys.spacing(2),
        paddingBottom: theme.sys.spacing(2),
        borderBottom: `1px solid ${accentColor}`
      },
      '.jimu-alert-panel-description': {
        color: bodyColor,
        fontSize: '16px',
        lineHeight: '1.35'
      }
    }
  },
  icon: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const type = styleState?.type || 'warning'
    const severity = sysColor[type] || sysColor.warning
    const iconColor = sysColor.mode === 'dark' ? sysColor.surface.overlayText : severity.main

    return {
      marginRight: 0,
      flexShrink: 0,
      '.severity-icon': {
        color: iconColor,
        width: '24px',
        height: '24px'
      }
    }
  },
  message: ({ styleState, theme }) => {
    return {
      flex: '1 1 auto',
      minWidth: 0,
      lineHeight: 'normal'
    }
  },
  action: ({ styleState, theme }) => {
    const sysColor = theme.sys.color
    const actionColor = sysColor.mode === 'dark' ? sysColor.surface.overlayText : sysColor.surface.backgroundText

    return {
      marginLeft: 'auto',
      alignSelf: 'flex-start',
      color: actionColor,
      '.jimu-button': {
        padding: 0,
        color: actionColor,
        '&:hover': {
          background: 'transparent',
          color: actionColor
        }
      }
    }
  }
}

export { Button, Radio, Switch, Alert }
