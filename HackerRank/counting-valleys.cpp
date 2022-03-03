#include <bits/stdc++.h>
using namespace std;

int countingValleys(int n, string s) {
    int a = 0, flag = 0, count = 0;
    for (int i = 0; i < n; i++) {
        s[i] == 'U' ? ++a : --a;
        if (a < 0) flag = 1;
        if (flag && a == 0) {
            flag = 0;
            count++;
        }
    }
    return count;
}

int main()
{
    int n;
    string s;
    cin >> n;
    cin >> s;

    int result = countingValleys(n, s);
    cout << result << endl;
    
    return 0;
}
