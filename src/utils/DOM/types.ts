import * as Attrs from "./attributes";

// export interface DOMElement {
//   tag: string
//   attributes: object
// }

interface NodeArray extends Array<NodeType> {}
export type NodeType =
| Node
| Text
| NodeArray
| string
| number
| symbol
| boolean
| null
| undefined

export interface CustomElements {}

declare global {
  interface CSSStyleSheet {
    replace (text: string): Promise<any>
    replaceSync (text: string): any
  }
  interface DocumentOrShadowRoot {
    adoptedStyleSheets: ReadonlyArray<CSSStyleSheet>
    readonly activeElement: Element | null
    readonly fullscreenElement: Element | null
    readonly styleSheets: StyleSheetList
    caretPositionFromPoint(x: number, y: number): CaretPosition
    elementFromPoint(x: number, y: number): Element
    elementsFromPoint(x: number, y: number): Element[]
    getSelection(): Selection
  }
  interface ShadowRoot extends DocumentOrShadowRoot {
  }
  interface Document extends DocumentOrShadowRoot {
  }

  namespace JSX {
    interface Element extends HTMLElement {}
    interface ElementClass extends HTMLElement {}
    interface ElementAttributesProperty {
      __attributes: {};
    }
    interface ElementChildrenAttribute {
      children: NodeType;
    }
    interface IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends CustomElements {
      a: Attrs.HTMLAnchorElementAttributes
      slot: Attrs.HTMLSlotElementAttributes
      template: Attrs.HTMLElementAttributes<HTMLTemplateElement>
      div: Attrs.HTMLElementAttributes<HTMLDivElement>
      nav: Attrs.HTMLElementAttributes
      style:  Attrs.HTMLStyleElementAttributes
      span: Attrs.HTMLElementAttributes<HTMLSpanElement>
      p: Attrs.HTMLElementAttributes<HTMLParagraphElement>
      img: Attrs.HTMLImageElementAttributes
      br: Attrs.HTMLElementAttributes<HTMLBRElement>
      ul: Attrs.HTMLElementAttributes<HTMLUListElement>
      li: Attrs.HTMLElementAttributes<HTMLLIElement>
      section: Attrs.HTMLElementAttributes
      h1: Attrs.HTMLElementAttributes<HTMLHeadingElement>
      h2: Attrs.HTMLElementAttributes<HTMLHeadingElement>
      h3: Attrs.HTMLElementAttributes<HTMLHeadingElement>
      h4: Attrs.HTMLElementAttributes<HTMLHeadingElement>
      html: Attrs.HTMLHtmlElementAttributes
      head: Attrs.HTMLElementAttributes<HTMLHeadElement>
      title: Attrs.HTMLElementAttributes<HTMLTitleElement>
      meta: Attrs.HTMLMetaElementAttributes
      link: Attrs.HTMLLinkElementAttributes
      body: Attrs.HTMLBodyElementAttributes
      script: Attrs.HTMLScriptElementAttributes
      footer: Attrs.HTMLElementAttributes
      main: Attrs.HTMLElementAttributes<HTMLMainElement>
      details: Attrs.HTMLDetailsElementAttributes<HTMLDetailsElement>
      summary: Attrs.HTMLElementAttributes<HTMLElement>
      i: Attrs.HTMLElementAttributes<HTMLElement>
      header: Attrs.HTMLElementAttributes<HTMLElement>
      svg: Attrs.SVGSVGElementAttributes<SVGSVGElement>
      path: Attrs.SVGPathElementAttributes<SVGPathElement>
      g: Attrs.SVGElementAttributes<SVGGElement>
      rect: Attrs.SVGRectElementAttributes<SVGRectElement>
      text: Attrs.SVGTextElementAttributes<SVGTextElement>
      tspan: Attrs.SVGTextElementAttributes<SVGTSpanElement>
    }
  }
}

export * from "./attributes";
