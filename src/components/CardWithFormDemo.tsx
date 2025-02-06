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
import axios from "axios";
import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export function CardWithForm() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const amountRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="flex justify-center mt-32">
      <Card className="w-[450px] h-[250px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{id}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Amount</Label>
                <Input
                  ref={amountRef}
                  onChange={(e) => {
                    setAmount(Number(e.target.value));
                  }}
                  id="name"
                  placeholder="$"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/dashboard"}>Cancel</Link>
          <Button
            onClick={async () => {
              const reposne = await axios.post(
                `${BACKEND_URL}/api/v1/account/transfer`,
                {
                  amount: amount,
                  to: id,
                },
                {
                  headers: {
                    authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              alert(reposne.data.msg);
              if (amountRef.current) {
                amountRef.current.value = "";
              }
            }}
          >
            Send{" "}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
