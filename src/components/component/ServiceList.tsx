import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function ServiceList(): JSX.Element {
  return (
    <div className="flex flex-col space-y-1.5 items-start max-w-sm flex-1">
      <Select>
        <SelectTrigger id="framework">
          <SelectValue placeholder="Select a service"/>
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="Others">Others..</SelectItem>
          <SelectItem value="Aluminum Door Cabinet">Aluminum Door Cabinet</SelectItem>
          <SelectItem value="Aluminum Kitchen">Aluminum Kitchen</SelectItem>
          <SelectItem value="Aluminum Wardrobe Cabinet">Aluminum Wardrobe Cabinet</SelectItem>
          <SelectItem value="Dog Houses">Dog Houses</SelectItem>
          <SelectItem value="Estante Showcase">Estante Showcase</SelectItem>
          <SelectItem value="Fence">Fence</SelectItem>
          <SelectItem value="Fix Glass">Fix Glass</SelectItem>
          <SelectItem value="Fix Window Screen">Fix Window Screen</SelectItem>
          <SelectItem value="Frameless Doors">Frameless Doors</SelectItem>
          <SelectItem value="Glass Railings">Glass Railings</SelectItem>
          <SelectItem value="Mirror Glass">Mirror Glass</SelectItem>
          <SelectItem value="Patch Fitting">Patch Fitting</SelectItem>
          <SelectItem value="Signboard Aluminum Framing">Signboard Aluminum Framing</SelectItem>
          <SelectItem value="Sliding Door">Sliding Door</SelectItem>
          <SelectItem value="Sliding Screen Doors">Sliding Screen Doors</SelectItem>
          <SelectItem value="Sliding Screen Windows">Sliding Screen Windows</SelectItem>
          <SelectItem value="Stainless Gate">Stainless Gate</SelectItem>
          <SelectItem value="Stainless Railings">Stainless Railings</SelectItem>
          <SelectItem value="Steel Gate Door">Steel Gate Door</SelectItem>
          <SelectItem value="Steel Trusses">Steel Trusses</SelectItem>
          <SelectItem value="Steel Windows">Steel Windows</SelectItem>
          <SelectItem value="Window Grills">Window Grills</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}