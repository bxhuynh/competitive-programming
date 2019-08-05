#include <bits/stdc++.h>

using namespace std;

int nonDivisibleSubset(int k, vector<int> s) {
    int cur[k + 1] = {0}, res = 0;

    for (int i = 0; i < s.size(); i++)
        cur[s[i]%k]++;

    if (cur[0] > 0) res++;
    for (int i = 1; i <= k/2; i++)
        res+= max(cur[i], cur[k-i]);
    if (k%2 == 0 && cur[k/2] > 0) 
        res= res - cur[k/2] + 1;

    return res;
}

int main()
{
    int n, k, x;
    vector <int> s;
    cin >> n >> k;
    for (int i = 0; i < n; i++)
    {
        cin >> x;
        s.push_back(x);
    }

    int result = nonDivisibleSubset(k, s);
    cout << result << endl;

    return 0;
}
