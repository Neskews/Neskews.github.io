mod config;

fn main() {
    let setup = config::Config::get_birthday_config();
    let weight = config::Config::get_birthday_weight();
    let search = config::Config::get_search_config();
    let base_config = config::Config::new();

    let difference = config::calculate_difference(&setup, &search).unwrap();
    let weighted_difference = config::apply_weight(&difference, &weight);
    let similarity = config::calculate_similarity(&weighted_difference.unwrap());
}