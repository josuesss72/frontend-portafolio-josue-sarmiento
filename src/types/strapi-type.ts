export interface IStrapiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export interface IIdentifiers {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}
