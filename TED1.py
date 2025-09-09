
alturas = []
generos = []

# Coleta de dados
for i in range(1, 16):
    print(f"Pessoa {i}:")
    altura = float(input("Digite a altura (em metros): "))
    genero = input("Digite o gênero (M para Masculino / F para Feminino): ").strip().upper()

    alturas.append(altura)
    generos.append(genero)

maior_altura = max(alturas)
menor_altura = min(alturas)


alturas_masculinas = [alturas[i] for i in range(15) if generos[i] == "M"]
if alturas_masculinas:
    media_masculina = sum(alturas_masculinas) / len(alturas_masculinas)
else:
    media_masculina = 0


num_feminino = generos.count("F")

# Exibição dos resultados
print("\nResultados:")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
print(f"Média de altura das pessoas do gênero Masculino: {media_masculina:.2f} m")
print(f"Número de pessoas do gênero Feminino: {num_feminino}")

