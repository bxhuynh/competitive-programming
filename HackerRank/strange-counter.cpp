#include <bits/stdc++.h>

using namespace std;
//1000000000000
//649267441662

long strangeCounter(long t) {
   long temp = t/3  + 1;
   long n = trunc(log(temp)/log(2));
   double t2 = pow(2.0,n);

   long r = trunc( t - 3*(t2 - 1) );
   if (r == 0) return 1;

   long an = trunc(3*t2);
   return an - r + 1;
}

int main()
{
  //  freopen("in.c", "r", stdin);
    long t;
    cin >> t;
    long result = strangeCounter(t);
    cout << result << "\n";

    return 0;
}
