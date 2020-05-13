Scenario: The users sees bands directly
  The use must see bands a fast as possbile, so the start page must
  initially contain bands.
  
  Given Ulf is a user
    When No filters are provided
    Then Ulf sees bands