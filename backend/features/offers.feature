Feature: Get an optimal birthday config
  To hire a relevant band, it must match the criteria for the
  event it plays on as best as possible. Therefore, we must
  determine a configuration for an optimal band for that 
  event.

  Scenario: Birthday
    Given the optimal configuration for a birthday is
    | is_available_during_week | average_age | years_of_experience |
    | 0                        | 30          | 100                 |
    And the band "The Greats" has following config
    | is_available_during_week | average_age | years_of_experience |
    | 0                        | 30          | 100                 |
    When the user searches for a band to play on his birthday
    Then the similarity between the birthday config and the bamds config is "0"