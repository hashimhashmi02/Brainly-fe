import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcons";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

type ContentType = "youtube" | "twitter";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({
  open,
  onClose,
}: CreateContentModalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>("youtube");

  const addContent = async () => {
    const title = titleRef.current?.value ?? "";
    const link = linkRef.current?.value ?? "";
    const token = localStorage.getItem("token");

    console.log("📌 Sending token:", token);

    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { title, link, type },
        {
          headers: {
            Authorization: token || "",
          },
        }
      );
      console.log("✅ Content added successfully");
      onClose();
    } catch (err) {
      console.error("❌ Failed to add content:", err);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-slate-500 opacity-60"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-end">
          <button onClick={onClose} className="p-1">
            <CrossIcon />
          </button>
        </div>

        <div className="space-y-4">
          <Input reference={titleRef} label="Title" placeholder="Enter title" />
          <Input reference={linkRef} label="Link" placeholder="Enter link" />

          <div>
            <h2 className="font-medium mb-2">Type</h2>
            <div className="flex gap-2">
              <Button
                text="YouTube"
                variant={type === "youtube" ? "primary" : "secondary"}
                onClick={() => setType("youtube")}
              />
              <Button
                text="Twitter"
                variant={type === "twitter" ? "primary" : "secondary"}
                onClick={() => setType("twitter")}
              />
            </div>
          </div>

          <div className="text-center">
            <Button text="Submit" variant="primary" onClick={addContent} />
          </div>
        </div>
      </div>
    </div>
  );
}
