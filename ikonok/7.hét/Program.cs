using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace megallok
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> sorok = new List<string>();
            foreach (string item in File.ReadLines("megallok.txt", Encoding.UTF8))
            {
                sorok.Add(item);
            }
            string output = "";
            foreach (string item in sorok)
            {
                output += $"\"{item}\",";
            }
            output = output.Trim(',');
            Console.WriteLine(output);

            Console.ReadKey();
        }
    }
}
