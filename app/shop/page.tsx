import CategoryGenderBrand from "@/components/Shop/Category";
import Color from "@/components/Shop/Color";
import Price from "@/components/Shop/Price";
import Products from "@/components/Shop/Products/Products";
import Size from "@/components/Shop/Size";
import { dbts } from "@/db";
import {
  getAllBrands,
  getAllCategories,
  getAllColors,
  getAllSizes,
} from "@/utils/filter-data";
import { Card, CardHeader } from "@nextui-org/card";
// async function getDB() {
//   const res = await fetch("http://localhost:4000/shoes", {
//     cache: "no-store",
//   });
//   return res.json();
// }
export default async function ShopPage() {
  // const data = await getDB();
  // console.log(data);
const data = dbts
  const allSizes = getAllSizes(data);
  const allColors = getAllColors(data);
  const allCategories = getAllCategories(data);
  const allBrands = getAllBrands(data);
  return (
    <div className="flex h-auto w-full max-sm:w-[90%] max-sm:pr-0 max-sm:mx-auto">
      <Card
        classNames={{
          base: "py-2 max-sm:hidden",
        }}
        className="mt-4 dark relative rounded-medium !border-small border-slate-800 w-1/3 p-4">
        <CardHeader className="border-b-1 py-3 border-slate-700">
          Filter by
        </CardHeader>
        <Price />
        <Size sizes={allSizes} />
        <Color colors={allColors} />
        <CategoryGenderBrand categories={allCategories} brands={allBrands} />
      </Card>
      <div className="w-full flex-1 flex-col p-4 max-sm:p-0">
        <article className="flex h-16 items-center gap-2 rounded-medium border-small border-slate-800 px-4">
          <h2 className="text-medium font-medium text-slate-300 border-small border-slate-400 p-2 rounded-large">
            Overview
          </h2>
        </article>
        <section className="mt-4 min-h-[91.5%] mx-auto h-auto p-4 w-full overflow-visible rounded-medium border-small border-slate-800">
          <Products data={data} />
        </section>
      </div>
    </div>
  );
}
