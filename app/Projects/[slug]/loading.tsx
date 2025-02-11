export default function Loading() {
    return (
      <div className="space-y-8 animate-pulse mt-40">
        <div className="h-6 w-24 bg-muted rounded" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-muted rounded" />
          <div className="h-4 w-1/2 bg-muted rounded" />
        </div>
        <div className="aspect-video w-full bg-muted rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-4 bg-muted rounded w-full" />
            ))}
          </div>
          <div className="h-48 bg-muted rounded-xl" />
        </div>
      </div>
    );
  }