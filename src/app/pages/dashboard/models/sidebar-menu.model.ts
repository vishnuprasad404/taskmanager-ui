export interface sidebarMenuItemModel {
    section: string
    links: sidebarMenuItemLinkModel[]
}

interface sidebarMenuItemLinkModel {
    title: string
    route: string
    count?: string
    iconClass?: string
    queryParams?: {type: string | undefined}
    subLinks?: sidebarMenuItemLinkModel[];
}