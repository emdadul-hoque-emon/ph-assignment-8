import { NextResponse } from "next/server";

type FootprintFeature = {
  type: "Feature";
  properties: {
    id: string;
    name: string;
    country: string;
    trips: number;
    intensity: number;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
};

type FootprintCollection = {
  type: "FeatureCollection";
  features: FootprintFeature[];
};

const features: FootprintFeature[] = [
  {
    type: "Feature",
    properties: { id: "dhaka", name: "Dhaka", country: "Bangladesh", trips: 42, intensity: 0.92 },
    geometry: { type: "Point", coordinates: [90.4125, 23.8103] },
  },
  {
    type: "Feature",
    properties: { id: "tokyo", name: "Tokyo", country: "Japan", trips: 31, intensity: 0.75 },
    geometry: { type: "Point", coordinates: [139.6917, 35.6895] },
  },
  {
    type: "Feature",
    properties: { id: "kyoto", name: "Kyoto", country: "Japan", trips: 16, intensity: 0.5 },
    geometry: { type: "Point", coordinates: [135.7681, 35.0116] },
  },
  {
    type: "Feature",
    properties: { id: "reykjavik", name: "Reykjavik", country: "Iceland", trips: 19, intensity: 0.62 },
    geometry: { type: "Point", coordinates: [-21.8174, 64.1265] },
  },
  {
    type: "Feature",
    properties: { id: "istanbul", name: "Istanbul", country: "Turkey", trips: 24, intensity: 0.58 },
    geometry: { type: "Point", coordinates: [28.9784, 41.0082] },
  },
  {
    type: "Feature",
    properties: { id: "rome", name: "Rome", country: "Italy", trips: 20, intensity: 0.55 },
    geometry: { type: "Point", coordinates: [12.4964, 41.9028] },
  },
  {
    type: "Feature",
    properties: { id: "cairo", name: "Cairo", country: "Egypt", trips: 14, intensity: 0.43 },
    geometry: { type: "Point", coordinates: [31.2357, 30.0444] },
  },
  {
    type: "Feature",
    properties: { id: "cape-town", name: "Cape Town", country: "South Africa", trips: 12, intensity: 0.39 },
    geometry: { type: "Point", coordinates: [18.4241, -33.9249] },
  },
  {
    type: "Feature",
    properties: { id: "new-york", name: "New York", country: "USA", trips: 23, intensity: 0.61 },
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
  },
  {
    type: "Feature",
    properties: { id: "lima", name: "Lima", country: "Peru", trips: 10, intensity: 0.34 },
    geometry: { type: "Point", coordinates: [-77.0428, -12.0464] },
  },
  {
    type: "Feature",
    properties: { id: "sydney", name: "Sydney", country: "Australia", trips: 15, intensity: 0.47 },
    geometry: { type: "Point", coordinates: [151.2093, -33.8688] },
  },
  {
    type: "Feature",
    properties: { id: "queenstown", name: "Queenstown", country: "New Zealand", trips: 8, intensity: 0.28 },
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] },
  },
];

export async function GET() {
  const payload: FootprintCollection = {
    type: "FeatureCollection",
    features,
  };

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  });
}
