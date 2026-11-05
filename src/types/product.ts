export type ProductStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface ProductImage {
  id: string;
  url: string;
  altText: string;
  isMain: boolean;
  position: number;
}

export interface ProductSpecification {
  key: string;
  value: string;
}

/** Unified static product shape; suitable for mapping to a future GraphQL DTO. */
export interface Product {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  productTypeId: string;
  modelId?: string;
  description: string;
  subDescription?: string;
  images: ProductImage[];
  specifications: ProductSpecification[];
  status: ProductStatus;
  price?: string;
  tags?: string[];
  badge?: string;
  family?: string;
  compatibleBrandId?: string;
  sourceUrl?: string;
  /** Preserves existing accessory classification used by current UI. */
  legacyKind?: string;
}
