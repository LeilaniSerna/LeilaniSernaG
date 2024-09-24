# Sistema de Asistencias 

asistencias = {
    'alumno1': [1, 1, 0, 1, 0, 1],
    'alumno2': [0, 1, 1, 0, 1, 1],
}


def contar_asistencias(asistencia, indice=0):
    if indice == len(asistencia):
        return 0
    return asistencia[indice] + contar_asistencias(asistencia, indice + 1)
o
nombre_alumno = 'alumno1'
total_asistencias = contar_asistencias(asistencias[nombre_alumno])

print(f"El alumno {nombre_alumno} asistió {total_asistencias} días.")
