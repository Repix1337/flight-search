interface FlightSearchData {
    search_metadata: SearchMetadata;
    search_parameters: SearchParameters;
    best_flights: Flight[];
    other_flights: Flight[];
    price_insights: PriceInsights;
    airports: Airport[];
  }
  
  interface SearchMetadata {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    google_flights_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
  }
  
  interface SearchParameters {
    engine: string;
    hl: string;
    gl: string;
    departure_id: string;
    arrival_id: string;
    outbound_date: string;
    return_date: string;
  }
  
  interface Flight {
    flights: FlightSegment[];
    layovers?: Layover[];
    total_duration: number;
    carbon_emissions: CarbonEmissions;
    price: number;
    type: string;
    airline_logo: string;
    departure_token: string;
  }
  
  interface FlightSegment {
    departure_airport: AirportInfo;
    arrival_airport: AirportInfo;
    duration: number;
    airplane?: string;
    airline: string;
    airline_logo: string;
    travel_class: string;
    flight_number: string;
    legroom: string;
    extensions: string[];
    often_delayed_by_over_30_min?: boolean;
  }
  
  interface AirportInfo {
    name: string;
    id: string;
    time: string;
  }
  
  interface Layover {
    duration: number;
    name: string;
    id: string;
    overnight?: boolean;
  }
  
  interface CarbonEmissions {
    this_flight: number;
    typical_for_this_route: number;
    difference_percent: number;
  }
  
  interface PriceInsights {
    lowest_price: number;
    price_level: string;
    typical_price_range: [number, number];
    price_history: [number, number][];
  }
  
  interface Airport {
    departure: AirportDetails[];
    arrival: AirportDetails[];
  }
  
  interface AirportDetails {
    airport: {
      id: string;
      name: string;
    };
    city: string;
    country: string;
    country_code: string;
    image: string;
    thumbnail: string;
  }
  interface ExchangeRateAPIResponse {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: {
      [currencyCode: string]: number;
    };
  }