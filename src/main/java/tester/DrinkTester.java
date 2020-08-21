package tester;

public class DrinkTester {

    public static String getDrink(int age){
        switch (age){
            case 12: return "beer";
            case 17: return "juice";
            case 55: return "beer";
            default: return "";
        }
    }

}
