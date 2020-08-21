package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tester.DrinkTester;
import tester.FridayTester;

import static org.junit.Assert.assertEquals;

public class StepDefinitions {

    private String today;
    private String actualAnswer;

    private int age;
    private String drink;

    @Given("^today is \"([^\"]*)\"$")
    public void today_is(String day) throws Exception {
        this.today = day;
    }

    @When("^I ask whether it's Friday yet$")
    public void i_ask_whether_it_s_Friday_yet() throws Exception {
        this.actualAnswer = FridayTester.isItFriday(today);
    }

    @Then("^I should be told \"([^\"]*)\"$")
    public void i_should_be_told(String expectedAnswer) throws Exception {
       assertEquals(expectedAnswer, actualAnswer);
    }

    @Given("^Customer is (\\d+) old$")
    public void customer_is_old(int age) throws Exception {
       this.age = age;
    }

    @When("^he orders a \"([^\"]*)\"$")
    public void he_orders_a(String drink) throws Exception {
        this.drink = DrinkTester.getDrink(this.age);
    }

    @Then("^He should be not allowed to order \"([^\"]*)\"$")
    public void he_should_be_not_allowed_to_order(String drink) throws Exception {
        assertEquals(this.drink, drink);
    }
}
