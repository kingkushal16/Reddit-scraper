"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const [subreddit, setSubreddit] = useState("");
  const [category, setCategory] = useState("comfortable");
  const [scrapedData, setScrapedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null); // Reset any previous errors
    try {
      const response = await fetch("http://localhost:5000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subreddit,
          category,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setScrapedData(data); // Update with the scraped data
      } else {
        setError("Error fetching data");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="sub">Name of Subreddit</Label>
        <Input
          type="text"
          id="sub"
          placeholder="Subreddit name"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 py-4">
        <Label>Category:</Label>
        <RadioGroup className="py-2" value={category} onValueChange={setCategory}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hot" id="r1" />
            <Label htmlFor="r1">Hot</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="top" id="r2" />
            <Label htmlFor="r2">Top</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="r3" />
            <Label htmlFor="r3">New</Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Scraping..." : "Scrape"}
      </Button>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      <div className="grid">
        {scrapedData.length > 0 ? (
          <Table className="w-full max-w-2xl mt-6">
            <TableCaption>Scraped Data</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Content</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scrapedData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          !loading && !error && <p className="mt-6">No data to display</p>
        )}
      </div>
    </div>
  );
}
