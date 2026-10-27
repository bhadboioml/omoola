import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHeader } from '@/components/page-header'

type Product = {
  id: string
  name: string
  price: string
  category: string
  image: string
  sizes?: string[]
}

const PRODUCTS: Product[] = [
  {
    id: 'tee-black',
    name: 'OML Logo Tee — Black',
    price: '₦18,000',
    category: 'T-SHIRTS',
    image: '/images/merch/tee-black.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'tee-cream',
    name: 'BhadBoi OML Tee — Cream',
    price: '₦18,000',
    category: 'T-SHIRTS',
    image: '/images/merch/tee-cream.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'hoodie',
    name: 'BhadBoi OML Pullover Hoodie',
    price: '₦42,000',
    category: 'HOODIES',
    image: '/images/merch/hoodie.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'cap',
    name: 'OML Embroidered Cap',
    price: '₦15,000',
    category: 'HATS',
    image: '/images/merch/cap.png',
  },
  {
    id: 'headwarmer',
    name: 'OML Ribbed Headwarmer',
    price: '₦12,000',
    category: 'HEADWARMERS',
    image: '/images/merch/headwarmer.png',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <div className="relative aspect-square w-full overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 bg-foreground px-3 py-1 text-xs tracking-label text-background">
          SOLD OUT
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs tracking-label text-muted-foreground">
            {product.category}
          </p>
          <h2 className="mt-1 font-serif text-xl leading-tight">{product.name}</h2>
        </div>
        <span className="shrink-0 text-sm tracking-wide">{product.price}</span>
      </div>

      {product.sizes && (
        <div className="mt-4 flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <span
              key={size}
              className="inline-flex h-8 min-w-8 items-center justify-center border border-border px-2 text-xs tracking-label text-muted-foreground opacity-50"
            >
              {size}
            </span>
          ))}
        </div>
      )}

      <button
        type="button"
        disabled
        className="mt-4 w-full cursor-not-allowed border border-border bg-secondary py-3 text-xs tracking-label text-muted-foreground"
      >
        SOLD OUT
      </button>
    </div>
  )
}

export default function MerchPage() {
  return (
    <>
      <SiteNav />
      <main>
        <PageHeader
          label="THE SHOP"
          title="MERCH"
          intro="Official BhadBoi OML apparel and accessories — t-shirts, hoodies, hats and headwarmers. The store is launching soon. Everything is currently sold out while we finalize our checkout."
        />

        <section className="grid grid-cols-1 gap-x-4 gap-y-12 px-5 pb-24 sm:grid-cols-2 md:grid-cols-3 md:px-10">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>

        {/* Promo band */}
        <section className="border-y border-border px-5 py-16 text-center md:px-10">
          <p className="mb-2 text-xs tracking-label text-brand">STORE COMING SOON</p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug text-pretty md:text-4xl">
            The official store opens after launch. Join the mailing list to be
            the first to shop when these pieces drop.
          </h2>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
