import java.util.Scanner;

public class HeroXP Level{
    public static void main(String[]args){
        Scanner scanner = new Scanner(Sytem.in);

// Entrada de dados
  System.out.print ("Digite o nome do herói: Ellen");
  String nome = scanner.nextLine(); 

  System.out.print ("Digite a quantidade de experiência (XP):8000");
  int xp = scanner.nextInt();

  //Variável para armazenar
  String nivel;

  //Estrutura de decisão para determinar o nível
  if (xp <1000){
    nivel = "Ferro";
  } else if (xp <=2000){
    nivel = "Bronze";
  } else if (xp <=5000){
    nivel = "Prata";
  } else if (xp<=7000){
    nivel = "Ouro";
  } else if (xp <=8000){
    nivel = "Platina";
  } else if (xp <=9000){
    nivel = "Ascendente";
  } else if (xp <=10000);{
    nivel = "Imortal";
  } else{
    nivel = "Radiante"
  }

  //Saída
  System.out.printLn ("O Herói de nome " + nome + " está no nível de " + nivel);

  scanner.close();
    }
}