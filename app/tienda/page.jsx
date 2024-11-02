'use client';
import Filters from "@/ui/Tienda/Filters";
export default function Page() {
    const categories = ["galletas", "brownies", "panaderia"]
    return (
        <div><Filters categories={categories} /></div>
    );
}