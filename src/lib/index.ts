export function getCategoryId(categoryName: string): string {
  return categoryName.toLowerCase().replace(" ", "-");
}
