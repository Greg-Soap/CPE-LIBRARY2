import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function TabNote() {
    return (
        <div className="flex">
            <Label className="font-medium text-[#807E7E] text-xl pt-2">Upload all your personal notes here</Label>
            <Button className="border rounded-3xl ml-14 text-white bg-[#820b8A]">Upload new note</Button>
            <Button className="border rounded-3xl ml-8 mt-0 text-white bg-[#820B8A]">Type new note</Button>
        </div>
    )
}