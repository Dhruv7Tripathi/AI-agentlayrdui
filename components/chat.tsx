"use client";

import { useState, type SyntheticEvent } from "react";
import { Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { ChatInput } from "@/components/ui/chat-input";

export default function ChatMessageListDemo() {

  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! How can I help you today?",
      sender: "ai",
    },
    {
      id: 2,
      content: "I have a question about the component library.",
      sender: "user",
    },
    {
      id: 3,
      content: "Sure! I'd be happy to help. What would you like to know?",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e?: SyntheticEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: "This is an AI response to your message.",
          sender: "ai",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAttachFile = () => {
    //
  };

  const handleMicrophoneClick = () => {
    //
  };

  return (
    <div className="h-[600px] w-full sm:w-[500px] md:w-[600px] lg:w-[650px] border bg-white dark:bg-black rounded-lg flex flex-col mx-auto">
      <div className="flex-1 mt-2 overflow-hidden">
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 mt-2 shrink-0"
                src={
                  message.sender === "user"
                    ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                }
                fallback={message.sender === "user" ? "US" : "AI"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 shrink-0"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                fallback="AI"
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>

      <div className="p-2 sm:p-3 md:p-4 border-t">
        <div className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1">
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            className="min-h-10 sm:min-h-11 md:min-h-12 resize-none rounded-lg bg-background border-0 p-2 sm:p-2.5 md:p-3 shadow-none focus-visible:ring-0 text-sm"
          />
          <div className="flex items-center p-2 sm:p-2.5 md:p-3 pt-0 justify-between">
            <div className="flex gap-0.5 sm:gap-1">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
              >
                <Paperclip className="size-3.5 sm:size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
              >
                <Mic className="size-3.5 sm:size-4" />
              </Button>
            </div>
            <Button
              type="button"
              size="sm"
              onClick={handleSubmit}
              className="ml-auto gap-1 sm:gap-1.5 text-xs sm:text-sm h-8 sm:h-9 px-2.5 sm:px-3"
            >
              <span className="hidden sm:inline">Send Message</span>
              <span className="sm:hidden">Send</span>
              <CornerDownLeft className="size-3 sm:size-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}