package HashMap;

import java.util.*;

public class FindPairs {
    public static void findPairs(int []a, int []b, int k) {
        HashMap<Integer, Integer> map1 = new HashMap<>();
        for(int i = 0; i < a.length; i++){
            map1.put(a[i], map1.getOrDefault(a[i], i) + 1);
        }

        for(int num : map1.keySet()){
            System.out.print(num + " ");
        }
    }
    public static void main(String[] args) {
        int a[] = {1,2,4,5,7};
        int b[] = {5,6,3,4,8};
        int k = 9;
        findPairs(a, b, k);
    }
}
