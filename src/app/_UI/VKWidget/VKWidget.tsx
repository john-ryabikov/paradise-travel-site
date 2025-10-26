'use client';

import { useEffect } from 'react';

interface VKWidgetProps {
  communityId: number,
  options?: {
    width?: number,
    height?: number,
    onCanNotWrite?: () => void,
    welcomeScreen?: number,
    disableButton?: boolean,
  };
}

export default function VKWidget({ communityId, options = {} }: VKWidgetProps) {
  useEffect(() => {

    if (document.getElementById('vk-widget-script')) return

    const script = document.createElement('script')
    script.id = 'vk-widget-script'
    script.src = 'https://vk.com/js/api/openapi.js?169'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (window.VK && window.VK.Widgets) {
        // @ts-ignore
        window.VK.Widgets.CommunityMessages('vk-community-messages', communityId, options)
      }
    }
    
    document.head.appendChild(script)

    return () => {
      const widget = document.getElementById('vk-community-messages')
      if (widget) {
        widget.innerHTML = ''
      }
    }
  }, [communityId, options])

  return <div id="vk-community-messages"></div>
}