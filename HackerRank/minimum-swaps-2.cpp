#include <bits/stdc++.h>
using namespace std;

int main()
{
  //freopen("in.c", "r", stdin);

  int n, x, ans = 0;
  vector <pair<int, int> > arr;
  int visited[100001] = {0};

  cin >> n;
  for (int i = 0; i < n; i++)
  {
    cin >> x;
    arr.push_back(make_pair(x, i));
  }

  sort(arr.begin(), arr.end());

  for (int i = 0; i < n; i++)
  {
    int j = arr[i].second;
    int cycleSize = 0;
    while (!visited[j])
    {
      cycleSize++;
      visited[j] = 1;
      j = arr[j].second;
    }

    if (cycleSize > 1)
      ans += (cycleSize - 1);
  }

  cout << ans << endl;

  return 0;
}
