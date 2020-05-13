use std::collections::HashMap;

type Setup = HashMap<&'static str, f32>;
const KEYS: [&'static str; 3] = ["average_age", "years_of_experience", "is_available_during_week"];

struct ConfigArms(f32, f32);

#[derive(Debug, Copy, Clone)]
pub struct Config {}

impl Config {
    pub fn new() -> Setup {
        let mut config = HashMap::new();
        for key in KEYS.to_vec() {
            config.insert(key, 0.0);
        }

        config
    }
    
    pub fn get_birthday_config() -> Setup {
        let mut birthday_config = HashMap::new();
    
        birthday_config.insert("average_age", 30.0);
        birthday_config.insert("years_of_experience", 100.0);
        birthday_config.insert("is_available_during_week", 0.0);
    
        birthday_config
    }

    pub fn get_search_config() -> Setup {
        let mut search_config = HashMap::new();

        search_config.insert("average_age", 20.0);
        search_config.insert("years_of_experience", 110.0);
        search_config.insert("is_available_during_week", 0.0);

        search_config
    }

    pub fn get_birthday_weight() -> Setup {
        let mut birthday_weight = HashMap::new();
        
        birthday_weight.insert("average_age", 0.1);
        birthday_weight.insert("years_of_experience", 0.1);
        birthday_weight.insert("is_available_during_week", 0.1);

        birthday_weight
    }
}

pub fn calculate_difference(birthday_config: &Setup, search_config: &Setup) -> Result<Setup, &'static str> {
    let mut difference: Setup = HashMap::new();

    for key in KEYS.to_vec() {
        let a = match search_config.get(key) {
            Some(value) => value,
            _ => return Err("could not find key in birthday config")
        };

        let b = match birthday_config.get(key) {
            Some(value) => value,
            _ => return Err("could not find key in search config")
        };

        difference.insert(key, (a - b).abs());
    }

    Ok(difference)
}

pub fn apply_weight(difference: &Setup, weight: &Setup) -> Result<Setup, &'static str> {
    let mut weighted_setup = HashMap::new();
    
    for key in KEYS.to_vec() {
        let difference_value = match difference.get(key) {
            Some(value) => value,
            _ => return Err("could not find a difference value")
        };

        let weight_value = match weight.get(key) {
            Some(value) => value,
            _ => return Err("could not find a weight value")
        };

        weighted_setup.insert(key, difference_value * weight_value);
    };

    Ok(weighted_setup)
}

pub fn calculate_similarity(weighted_setup: &Setup) -> Result<f32, &'static str> {
    let mut similarity = 0.0;
    for key in KEYS.to_vec() {
        let value = match weighted_setup.get(key) {
            Some(value) => value,
            _ => return Err("could not calculate similarity")
        };

        similarity = similarity + value;
    }

    Ok(similarity)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn birthday_config_has_all_keys() {
        let birthday_config = Config::get_birthday_config();
        let keys = birthday_config.keys();
        assert_eq!(keys.len(), KEYS.len());
    }

    #[test]
    fn weight_has_needed_keys() {
        let weight = Config::get_birthday_weight();
        let keys = weight.keys();
        assert_eq!(keys.len(), KEYS.len());
    }

    #[test]
    fn search_config_has_needed_keys() {
        let search_config = Config::get_search_config();
        let keys = search_config.keys();
        assert_eq!(keys.len(), KEYS.len());
    }

    #[test]
    fn difference_has_needed_keys() {
        let a = Config::get_birthday_config();
        let b = Config::get_search_config();
        let actual = calculate_difference(&a, &b);
        assert_eq!(actual.unwrap().len(), KEYS.len());
    }

    #[test]
    fn difference_results_with_two_point_zero() {
        let a = Config::get_birthday_config();
        let b = Config::get_search_config();
        let actual = calculate_difference(&a, &b);
        let key1 = KEYS.get(0).unwrap();
        assert_eq!(*actual.unwrap().get(key1).unwrap(), 10.0);
    }
}