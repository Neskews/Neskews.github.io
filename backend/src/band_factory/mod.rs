use std::ops::Range;

#[derive(Debug)]
struct LengthOfShow {
    min: f32,
    max: f32,
}

#[derive(Debug)]
struct Rating {
    price_level: Range<u16>,
    customer_satisfaction: u8,
}

#[derive(Debug)]
pub struct Band {
    average_age: f32,
    instruments: Vec<String>,
    genre: String,
    amount_of_members: i32,
    mobile: bool,
    is_available_during_week: bool,
    years_of_experience: u32,
    is_amateur: bool,
    entertainment_factor: u8,
    rating: Rating,
    length_of_show: LengthOfShow
}

pub fn get_band() -> Band {
    Band {
        amount_of_members: 4,
        average_age: 22.75,
        entertainment_factor: 4,
        genre: "Country".to_string(),
        instruments: vec![
            String::from("Baritone Saxophone"),
            String::from("Trombone"),
            String::from("Alto Saxophone"),
            String::from("Trumpet"),
        ],
        is_amateur: true,
        is_available_during_week: false,
        mobile: false,
        rating: Rating {
            price_level: Range {
                start: 50,
                end: 500,
            },
            customer_satisfaction: 5,
        },
        years_of_experience: 40,
        length_of_show: LengthOfShow { min: 0.5, max: 5.0 },
    }
}
