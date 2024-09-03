export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="border-foreground px-4 border-l-2 text-foreground">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="border-destructive-foreground px-4 border-l-2 text-destructive-foreground">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="px-4 border-l-2 text-foreground">{message.message}</div>
      )}
    </div>
  );
}
