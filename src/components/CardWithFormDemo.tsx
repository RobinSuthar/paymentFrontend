import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function CardWithForm() {
  return (
    <div className="flex justify-center mt-32">
      <Card className="w-[450px] h-[250px]">
        <CardHeader>
          <CardTitle>Transfer</CardTitle>
          <CardDescription>
            This is a Fake Money you are transfering
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Amount</Label>
                <Input id="name" placeholder="$" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/dashboard"}>Cancel</Link>
          <Button>Send </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
