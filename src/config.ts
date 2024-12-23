export interface AIConfig {
	embeddingModel: string;
	chatModel: string;
	minParagraphSize: number;
	maxParagraphSize: number;
	minLengthBeforeAutoSearch: number;
}

export const config: AIConfig = {
	embeddingModel: "text-embedding-3-small",
	chatModel: "gpt-4o-mini",
	minParagraphSize: 200,
	maxParagraphSize: 600,
	minLengthBeforeAutoSearch: 10,
};