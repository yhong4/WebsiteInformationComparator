import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  namespace StoreState {
    interface categories {
        name:string,
        data:[]
    }

    interface competitors {
        tier:string,
        data:[]
    }
  }
  namespace Table {
    interface tableHeader {
      text:string,
      value:string,
      sortable?:boolean
    }
    interface tableRow {}
  }
}

