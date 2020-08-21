Feature: SQ-Test


  Scenario Outline: order drink
    Given Customer is <age> old
    When he orders a "<drink>"
    Then He should be not allowed to order "<drink>"

    Examples:
      | age | drink |
      | 12  | beer  |
      | 17  | juice |
      | 55  | beer  |
      | 55  | juice  |
