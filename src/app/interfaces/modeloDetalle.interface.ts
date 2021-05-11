export interface ModeloDetalle {
    id:               number;
    name:             string;
    segment:          string;
    year:             number;
    price:            number;
    title:            string;
    description:      string;
    thumbnail:        string;
    photo:            string;
    model_features:   ModelFeature[];
    model_highlights: ModelHighlight[];
}

export interface ModelFeature {
    name:        string;
    description: string;
    photo:       string;
}

export interface ModelHighlight {
    title:   string;
    content: string;
    image:   string;
}
