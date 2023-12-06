
interface itemDataType {
    completed:{
        boolean:boolean,
        date:string
    }
    date:string,
    id:string,
    important:boolean,
    name:string |undefined,
    type:string
} ;
interface PostedItemDataType {
    completed:{
        boolean:boolean,
        date:string
    }
    date:string,
    important:boolean,
    name:string,
    type:string
};

interface navBarDataItemType{
    id:string,
    title:string,
    icon:React.ReactNode,
    path:string
}

interface DateChangerType{
    data:itemDataType,
    updateItem:any,
    calendarIsOpen:boolean,
    setCalendarIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
 }
