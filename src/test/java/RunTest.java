import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"src/test/resource"},
        plugin = {"pretty", "html:build/reports/cucumber"}
)
public class RunTest {
}
