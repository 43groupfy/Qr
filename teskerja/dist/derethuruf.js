const questions = [
        {
          question: "A, C, C, E, ...., ...., G, I, I, K ",
          options: ["E – G", "G – H", "H – I", "G – J", "E – J"],
          correctIndex: "0"
        },	
        {
          question: "A, C, C, E, ...., ...., G, I, I, K ",
          options: ["E – G", "G – H", "H – I", "G – J", "E – J"],
          correctIndex: 0
        },											
        {
          question: "G, H, I, M, N, J, K, L, M, N, ...., ....",
          options: ["M – N", "P – O", "N – M", "O – P ", "N – O"],
          correctIndex: 0
        },											
        {
          question: "G, H, I, M, N, J, K, L, M, N, ...., ....",
          options: ["M – N","P – O","N – M","O – P","N – O"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, F, E, D, G, H, I, L, K, J, M, ....",
          options: ["O – M","O – U","P – U","N – O","O – U"],
          correctIndex: 3
        },											
        {
          question: "A, B, C, F, E, D, G, H, I, L, K, J, M, ....",
          options: ["O – M","O – U","P – U","N – O","O – U"],
          correctIndex: 3
        },											
        {
          question: "A, C, E, B, D, F, D, ....",
          options: ["F","A","D","G","H"],
          correctIndex: 0
        },											
        {
          question: "A, C, E, B, D, F, D, ....",
          options: ["F","A","D","G","H"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, M, N, O, Q, ....",
          options: ["B","R","S","D","A"],
          correctIndex: 1
        },											
        {
          question: "A, B, C, M, N, O, Q, ....",
          options: ["B","R","S","D","A"],
          correctIndex: 1
        },											
        {
          question: "L, N, O, C, E, F, R, ....",
          options: ["W, E","T, U","I, U","Y, T","A, W"],
          correctIndex: 1
        },											
        {
          question: "L, N, O, C, E, F, R, ....",
          options: ["W, E","T, U","I, U","Y, T","A, W"],
          correctIndex: 1
        },											
        {
          question: "K, L, O, G, H, K, Q, ....",
          options: ["R, U","E, R","T, Y","U, P","G, H"],
          correctIndex: 0
        },											
        {
          question: "K, L, O, G, H, K, Q, ....",
          options: ["R, U","E, R","T, Y","U, P","G, H"],
          correctIndex: 0
        },											
        {
          question: "F, I, L, O ....",
          options: ["S","R","T","U","V"],
          correctIndex: 1
        },											
        {
          question: "F, I, L, O ....",
          options: ["S","R","T","U","V"],
          correctIndex: 1
        },											
        {
          question: "A, B, C, B, C, D, C, D, E, D, E, F, ...., ...., ....",
          options: ["E, F, G","D, E, F","D, G, H","F, G, H","E, G, F"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, B, C, D, C, D, E, D, E, F, ...., ...., ....",
          options: ["E, F, G","D, E, F","D, G, H","F, G, H","E, G, F"],
          correctIndex: 0
        },											
        {
          question: "C, F, I, L, O, ...., ....",
          options: ["T – V","R – U","R – S","Q – T","P – S"],
          correctIndex: 1
        },											
        {
          question: "C, F, I, L, O, ...., ....",
          options: ["T – V","R – U","R – S","Q – T","P – S"],
          correctIndex: 1
        },											
        {
          question: "B, A, C, A, D, A, E, A, F, A, G, A, ...., ....",
          options: ["A – J","A – H","H – A","I – A","J – A"],
          correctIndex: 2
        },											
        {
          question: "B, A, C, A, D, A, E, A, F, A, G, A, ...., ....",
          options: ["A – J","A – H","H – A","I – A","J – A"],
          correctIndex: 2
        },											
        {
          question: "ABA, ABE, ABI, ...., ....",
          options: ["ABM – ABQ","ABU – ABO","ABE – ABZ","ABJ – ABG","ABD – ABX"],
          correctIndex: 0
        },											
        {
          question: "ABA, ABE, ABI, ...., ....",
          options: ["ABM – ABQ","ABU – ABO","ABE – ABZ","ABJ – ABG","ABD – ABX"],
          correctIndex: 0
        },											
        {
          question: "A, G, ...., S, ....",
          options: ["H – N","J – O","M – Y","N – Q","O – R"],
          correctIndex: 2
        },											
        {
          question: "A, G, ...., S, ....",
          options: ["H – N","J – O","M – Y","N – Q","O – R"],
          correctIndex: 2
        },											
        {
          question: "C, B, A, G, E,C, K, H, E, ....",
          options: ["N, K, G","O, K, G","N, L, G","M, L, G","O, K, H"],
          correctIndex: 1
        },											
        {
          question: "C, B, A, G, E,C, K, H, E, ....",
          options: ["N, K, G","O, K, G","N, L, G","M, L, G","O, K, H"],
          correctIndex: 1
        },											
        {
          question: "C, D, F, L, M, ....",
          options: ["P","Q","S","T","R"],
          correctIndex: 4
        },											
        {
          question: "C, D, F, L, M, ....",
          options: ["P","Q","S","T","R"],
          correctIndex: 4
        },											
        {
          question: "E, G, K, M, ....",
          options: ["O","P","R","S","Q"],
          correctIndex: 4
        },											
        {
          question: "E, G, K, M, ....",
          options: ["O","P","R","S","Q"],
          correctIndex: 4
        },											
        {
          question: "FAG, GAF, HAI, IAH, ....",
          options: ["HAL","HAK","JAK","JAI","KAL"],
          correctIndex: 2
        },											
        {
          question: "FAG, GAF, HAI, IAH, ....",
          options: ["HAL","HAK","JAK","JAI","KAL"],
          correctIndex: 2
        },											
        {
          question: "E, Y, H, U, K, Q, ....",
          options: ["M, M, P","N, M, Q","M, N, Q","N, M, P","N, N, P"],
          correctIndex: 1
        },											
        {
          question: "E, Y, H, U, K, Q, ....",
          options: ["M, M, P","N, M, Q","M, N, Q","N, M, P","N, N, P"],
          correctIndex: 1
        },											
        {
          question: "E, A, F, B, G, C, H, ....",
          options: ["D","E","F","G","H"],
          correctIndex: 0
        },											
        {
          question: "E, A, F, B, G, C, H, ....",
          options: ["D","E","F","G","H"],
          correctIndex: 0
        },											
        {
          question: "L, M, O, P, R, S, ....",
          options: ["S, T","T, U","U, V","T, V","V, W"],
          correctIndex: 2
        },											
        {
          question: "L, M, O, P, R, S, ....",
          options: ["S, T","T, U","U, V","T, V","V, W"],
          correctIndex: 2
        },											
        {
          question: "A, C, F, H, K, M, P, ....",
          options: ["R","S","T","U","V"],
          correctIndex: 0
        },											
        {
          question: "A, C, F, H, K, M, P, ....",
          options: ["R","S","T","U","V"],
          correctIndex: 0
        },											
        {
          question: "D, G, F, J, H, M, J, ....",
          options: ["Q, L","L, Q","L, P","P, L","S, N"],
          correctIndex: 3
        },											
        {
          question: "D, G, F, J, H, M, J, ....",
          options: ["Q, L","L, Q","L, P","P, L","S, N"],
          correctIndex: 3
        },											
        {
          question: "C, T, F, R, J, P, ...., ....",
          options: ["P, N","P, M","O, N","O, M","N, O"],
          correctIndex: 2
        },											
        {
          question: "C, T, F, R, J, P, ...., ....",
          options: ["P, N","P, M","O, N","O, M","N, O"],
          correctIndex: 2
        },											
        {
          question: "A, W, E, V, L, U, ....",
          options: ["T","S","O","N","M"],
          correctIndex: 4
        },											
        {
          question: "A, W, E, V, L, U, ....",
          options: ["T","S","O","N","M"],
          correctIndex: 4
        },											
        {
          question: "C, B, E, C, I, F, ...., ....",
          options: ["K, O","J, N","N, K","N, J","O, K"],
          correctIndex: 4
        },											
        {
          question: "C, B, E, C, I, F, ...., ....",
          options: ["K, O","J, N","N, K","N, J","O, K"],
          correctIndex: 4
        },											
        {
          question: "G, H, I, J, L, L, P, N, ....",
          options: ["M, U","O, P","O, N","U, P","U, N"],
          correctIndex: 3
        },											
        {
          question: "G, H, I, J, L, L, P, N, ....",
          options: ["M, U","O, P","O, N","U, P","U, N"],
          correctIndex: 3
        },											
        {
          question: "E, G, K, M, ....",
          options: ["Q","O","P","R","S"],
          correctIndex: 0
        },											
        {
          question: "E, G, K, M, ....",
          options: ["Q","O","P","R","S"],
          correctIndex: 0
        },											
        {
          question: "E, Y, H, U, K, Q, ....",
          options: ["M, M, P","M, N, Q","N, M, Q","N, M, P","N, N, P"],
          correctIndex: 2
        },											
        {
          question: "E, Y, H, U, K, Q, ....",
          options: ["M, M, P","M, N, Q","N, M, Q","N, M, P","N, N, P"],
          correctIndex: 2
        },											
        {
          question: "FAG, GAF, HAI, IAH, ....",
          options: ["HAL","HAK","JAI","JAK","KAL"],
          correctIndex: 3
        },											
        {
          question: "FAG, GAF, HAI, IAH, ....",
          options: ["HAL","HAK","JAI","JAK","KAL"],
          correctIndex: 3
        },											
        {
          question: "C, D, F, I, M, ....",
          options: ["R","P","Q","S","T"],
          correctIndex: 0
        },											
        {
          question: "C, D, F, I, M, ....",
          options: ["R","P","Q","S","T"],
          correctIndex: 0
        },											
        {
          question: "C, B, A, G, E, C, K, H, E, ....",
          options: ["N, K, G","N, L, G","O, K, G","M, L, H","O, K, H"],
          correctIndex: 2
        },											
        {
          question: "C, B, A, G, E, C, K, H, E, ....",
          options: ["N, K, G","N, L, G","O, K, G","M, L, H","O, K, H"],
          correctIndex: 2
        },											
        {
          question: "A, B, I, C, U, D, E, ....",
          options: ["E, F","F, O","O, F","H, I","E, O"],
          correctIndex: 4
        },											
        {
          question: "A, B, I, C, U, D, E, ....",
          options: ["E, F","F, O","O, F","H, I","E, O"],
          correctIndex: 4
        },											
        {
          question: "B, Y , D, T, H, P, ....",
          options: ["M, P","N, M","P, N","N, O","O, N"],
          correctIndex: 1
        },											
        {
          question: "B, Y , D, T, H, P, ....",
          options: ["M, P","N, M","P, N","N, O","O, N"],
          correctIndex: 1
        },											
        {
          question: "A, Z, C ,U F, R, K, ....",
          options: ["P, P","Q, P","R, Q","Q, T","P, R"],
          correctIndex: 4
        },											
        {
          question: "A, Z, C ,U F, R, K, ....",
          options: ["P, P","Q, P","R, Q","Q, T","P, R"],
          correctIndex: 4
        },											
        {
          question: "Y, Z B, A, X, W, C, D, U, V, F, E, ....",
          options: ["G","S","U","T","H"],
          correctIndex: 1
        },											
        {
          question: "Y, Z B, A, X, W, C, D, U, V, F, E, ....",
          options: ["G","S","U","T","H"],
          correctIndex: 1
        },											
        {
          question: "Z, W, S, N, H, ....",
          options: ["A","C","E","D","B"],
          correctIndex: 0
        },											
        {
          question: "Z, W, S, N, H, ....",
          options: ["A","C","E","D","B"],
          correctIndex: 0
        },											
        {
          question: "A, F, G, L, M, R, S, ....",
          options: ["Z","Y","X","U","T"],
          correctIndex: 2
        },											
        {
          question: "A, F, G, L, M, R, S, ....",
          options: ["Z","Y","X","U","T"],
          correctIndex: 2
        },											
        {
          question: "A, B, E, F, G, L, M, N, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 1
        },											
        {
          question: "A, B, E, F, G, L, M, N, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 1
        },											
        {
          question: "8, G, H, 11, J, K, 15, N, O, 20, ....",
          options: ["V","U","T","S","R"],
          correctIndex: 3
        },											
        {
          question: "8, G, H, 11, J, K, 15, N, O, 20, ....",
          options: ["V","U","T","S","R"],
          correctIndex: 3
        },											
        {
          question: "23, 22, S, R, 19, 18, O, N, 15, 14, ....",
          options: ["L","K","J","I","H"],
          correctIndex: 1
        },	        
        {
          question: "23, 22, S, R, 19, 18, O, N, 15, 14, ....",
          options: ["L","K","J","I","H"],
          correctIndex: 1
        },											
        {
          question: "C, F, A, I, L, A, O, R, ....",
          options: ["V, Y","U, Y","U, X","A, U","A, V"],
          correctIndex: 3
        },											
        {
          question: "C, F, A, I, L, A, O, R, ....",
          options: ["V, Y","U, Y","U, X","A, U","A, V"],
          correctIndex: 3
        },											
        {
          question: "A, D, E, I, N, ....",
          options: ["V","W","X","Y","Z"],
          correctIndex: 1
        },											
        {
          question: "A, D, E, I, N, ....",
          options: ["V","W","X","Y","Z"],
          correctIndex: 1
        },											
        {
          question: "Y, X, V, S, O, J, ....",
          options: ["D","F","C","E","B"],
          correctIndex: 0
        },	        
        {
          question: "Y, X, V, S, O, J, ....",
          options: ["D","F","C","E","B"],
          correctIndex: 0
        },											
        {
          question: "P, O, N, O, O, N, M, O, N, M, L, ....",
          options: ["L, K","O, N","O, M","M, L","K, O"],
          correctIndex: 2
        },											
        {
          question: "P, O, N, O, O, N, M, O, N, M, L, ....",
          options: ["L, K","O, N","O, M","M, L","K, O"],
          correctIndex: 2
        },											
        {
          question: "A, B, B, D, D, C, E, F, F, H, ....",
          options: ["I, H","H, I","H, G","G, G","G, H"],
          correctIndex: 2
        },											
        {
          question: "A, B, B, D, D, C, E, F, F, H, ....",
          options: ["I, H","H, I","H, G","G, G","G, H"],
          correctIndex: 2
        },											
        {
          question: "W, N, I, E, D, ....",
          options: ["F","E","A","B","C"],
          correctIndex: 2
        },											
        {
          question: "W, N, I, E, D, ....",
          options: ["F","E","A","B","C"],
          correctIndex: 2
        },											
        {
          question: "A, B, A, C, B, D, B, E, ....",
          options: ["C, F","C, G","E, F","E, G","B, H"],
          correctIndex: 0
        },											
        {
          question: "A, B, A, C, B, D, B, E, ....",
          options: ["C, F","C, G","E, F","E, G","B, H"],
          correctIndex: 0
        },											
        {
          question: "U, D, E, R, F, G, O, H, ....",
          options: ["K, L","K, I","I, K","I, H","I, L"],
          correctIndex: 4
        },											
        {
          question: "U, D, E, R, F, G, O, H, ....",
          options: ["K, L","K, I","I, K","I, H","I, L"],
          correctIndex: 4
        },											
        {
          question: "E, H, K, N, Q, ....",
          options: ["S, V","T, W","T, V","U, X","S, W"],
          correctIndex: 1
        },											
        {
          question: "E, H, K, N, Q, ....",
          options: ["S, V","T, W","T, V","U, X","S, W"],
          correctIndex: 1
        },											
        {
          question: "Y, W, T, P, K, ....",
          options: ["G","F","E","D","C"],
          correctIndex: 2
        },											
        {
          question: "Y, W, T, P, K, ....",
          options: ["G","F","E","D","C"],
          correctIndex: 2
        },											
        {
          question: "A, C, B, A, F, E, A, I, ....",
          options: ["A, J","A, L","F, A","G, A","H, A"],
          correctIndex: 4
        },											
        {
          question: "A, C, B, A, F, E, A, I, ....",
          options: ["A, J","A, L","F, A","G, A","H, A"],
          correctIndex: 4
        },											
        {
          question: "B, D, F, J, P, ....",
          options: ["T","U","V","Y","Z"],
          correctIndex: 4
        },											
        {
          question: "B, D, F, J, P, ....",
          options: ["T","U","V","Y","Z"],
          correctIndex: 4
        },											
        {
          question: "C, D, F, H, K, N, Q, ....",
          options: ["U, Y","U, X","T, X","T, W","U, W"],
          correctIndex: 0
        },											
        {
          question: "C, D, F, H, K, N, Q, ....",
          options: ["U, Y","U, X","T, X","T, W","U, W"],
          correctIndex: 0
        },											
        {
          question: "W, B, T, F, Q, J, N, N, ....",
          options: ["K, S","K, R","J, R","R, H","R, G"],
          correctIndex: 1
        },											
        {
          question: "W, B, T, F, Q, J, N, N, ....",
          options: ["K, S","K, R","J, R","R, H","R, G"],
          correctIndex: 1
        },											
        {
          question: "S, C, O, Q, G, O, O, K, O, M, O, O, ....",
          options: ["J, R, O","K, R, O","K, S, O","J, S, O","L, S, O"],
          correctIndex: 2
        },											
        {
          question: "S, C, O, Q, G, O, O, K, O, M, O, O, ....",
          options: ["J, R, O","K, R, O","K, S, O","J, S, O","L, S, O"],
          correctIndex: 2
        },											
        {
          question: "R, Q, P, P, O, P, N, M, P, L, ....",
          options: ["P, K","P, I","P, J","K, P","K, Q"],
          correctIndex: 3
        },											
        {
          question: "R, Q, P, P, O, P, N, M, P, L, ....",
          options: ["P, K","P, I","P, J","K, P","K, Q"],
          correctIndex: 3
        },											
        {
          question: "A, C, B, A, E, D, A, G, ....",
          options: ["A, I","A, H","F, A","A, F","H, A"],
          correctIndex: 2
        },											
        {
          question: "A, C, B, A, E, D, A, G, ....",
          options: ["A, I","A, H","F, A","A, F","H, A"],
          correctIndex: 2
        },											
        {
          question: "F, H, J, L, N, ....",
          options: ["P, R","O, Q","D, E","O, R","Q, S"],
          correctIndex: 0
        },											
        {
          question: "F, H, J, L, N, ....",
          options: ["P, R","O, Q","D, E","O, R","Q, S"],
          correctIndex: 0
        },											
        {
          question: "D, D, B, B, G, G, E, E, J, J, H, H, ....",
          options: ["K, K, L, L","M, M, K, K","L, L, K, K","N, N, L, L","L, L, M, M"],
          correctIndex: 1
        },											
        {
          question: "D, D, B, B, G, G, E, E, J, J, H, H, ....",
          options: ["K, K, L, L","M, M, K, K","L, L, K, K","N, N, L, L","L, L, M, M"],
          correctIndex: 1
        },											
        {
          question: "A, B, C, I, J, D, E, F, I, J, ....",
          options: ["G","L","M","N","K"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, I, J, D, E, F, I, J, ....",
          options: ["G","L","M","N","K"],
          correctIndex: 0
        },											
        {
          question: "B, C, E, H, ....",
          options: ["L, M","M, U","N, V","K, W","P, Y"],
          correctIndex: 1
        },											
        {
          question: "B, C, E, H, ....",
          options: ["L, M","M, U","N, V","K, W","P, Y"],
          correctIndex: 1
        },											
        {
          question: "A, B, D, F, I, L, O, ....",
          options: ["S, V","S, W","R, X","T, Y","R, Z"],
          correctIndex: 1
        },											
        {
          question: "A, B, D, F, I, L, O, ....",
          options: ["S, V","S, W","R, X","T, Y","R, Z"],
          correctIndex: 1
        },											
        {
          question: "V, U, S, R, O, N, J, ....",
          options: ["J, F","H, E","I, D","J, C","H, D"],
          correctIndex: 2
        },											
        {
          question: "V, U, S, R, O, N, J, ....",
          options: ["J, F","H, E","I, D","J, C","H, D"],
          correctIndex: 2
        },											
        {
          question: "O, P, O, N, O, M, L, K, ....",
          options: ["H, I, O","H, I, J","J, I, H","O, I, H","O, J, I"],
          correctIndex: 4
        },											
        {
          question: "O, P, O, N, O, M, L, K, ....",
          options: ["H, I, O","H, I, J","J, I, H","O, I, H","O, J, I"],
          correctIndex: 4
        },											
        {
          question: "ACEGI, ZXVTR, BDFHJ, ....",
          options: ["XWVUT","XVTRP","WUSQU","YUVWS","YWUSQ"],
          correctIndex: 4
        },											
        {
          question: "ACEGI, ZXVTR, BDFHJ, ....",
          options: ["XWVUT","XVTRP","WUSQU","YUVWS","YWUSQ"],
          correctIndex: 4
        },											
        {
          question: "F, H, G, J, I, M, L, Q, ....",
          options: ["K","N","P","Q","R"],
          correctIndex: 2
        },											
        {
          question: "F, H, G, J, I, M, L, Q, ....",
          options: ["K","N","P","Q","R"],
          correctIndex: 2
        },											
        {
          question: "W, B, T, F, Q, J, N, N, K, R, ....",
          options: ["H, U","H, V","R, U","S, V","F, T"],
          correctIndex: 1
        },											
        {
          question: "W, B, T, F, Q, J, N, N, K, R, ....",
          options: ["H, U","H, V","R, U","S, V","F, T"],
          correctIndex: 1
        },											
        {
          question: "A, C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "A, C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "U, F, T, G, R, I, O, L, K, P, ....",
          options: ["G, T","G, U","H, T","F, T","F, U"],
          correctIndex: 4
        },											
        {
          question: "U, F, T, G, R, I, O, L, K, P, ....",
          options: ["G, T","G, U","H, T","F, T","F, U"],
          correctIndex: 4
        },											
        {
          question: "Z, B, C, Z, E, G, Z, K, ....",
          options: ["N, Z","J, Z","Z, N","M, Z","Z, M"],
          correctIndex: 3
        },											
        {
          question: "Z, B, C, Z, E, G, Z, K, ....",
          options: ["N, Z","J, Z","Z, N","M, Z","Z, M"],
          correctIndex: 3
        },											
        {
          question: "A, B, C, E, H, M, ....",
          options: ["P","Q","R","S","U"],
          correctIndex: 4
        },											
        {
          question: "A, B, C, E, H, M, ....",
          options: ["P","Q","R","S","U"],
          correctIndex: 4
        },											
        {
          question: "A, X, O, B, L, O, D, F, O, ....",
          options: ["C, H","G, B","H, C","D, E","B, G"],
          correctIndex: 2
        },											
        {
          question: "A, X, O, B, L, O, D, F, O, ....",
          options: ["C, H","G, B","H, C","D, E","B, G"],
          correctIndex: 2
        },											
        {
          question: "E, E, D, D, J, J, H, H, O, O, L, L, T, ....",
          options: ["T, Q","T, P","T, R","T, S","P, T"],
          correctIndex: 1
        },											
        {
          question: "E, E, D, D, J, J, H, H, O, O, L, L, T, ....",
          options: ["T, Q","T, P","T, R","T, S","P, T"],
          correctIndex: 1
        },											
        {
          question: "W, R, T, P, Q, N, ....",
          options: ["P, O","O, P","N, M","N, L","M, N"],
          correctIndex: 3
        },											
        {
          question: "W, R, T, P, Q, N, ....",
          options: ["P, O","O, P","N, M","N, L","M, N"],
          correctIndex: 3
        },											
        {
          question: "F, F, H, K, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 0
        },											
        {
          question: "F, F, H, K, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 0
        },											
        {
          question: "A, B, D, E, F, I, J, K, L, Q, R, S, ....",
          options: ["T, U","T, W","T, Z","T, Y","T, X"],
          correctIndex: 4
        },											
        {
          question: "A, B, D, E, F, I, J, K, L, Q, R, S, ....",
          options: ["T, U","T, W","T, Z","T, Y","T, X"],
          correctIndex: 4
        },											
        {
          question: "6, F, G, 9, I, J, 13, M, N, 18, ....",
          options: ["Q","U","T","D","R"],
          correctIndex: 2
        },											
        {
          question: "6, F, G, 9, I, J, 13, M, N, 18, ....",
          options: ["Q","U","T","D","R"],
          correctIndex: 2
        },											
        {
          question: "H, J, L, K, J, L, N, M, L, N, ....",
          options: ["M","O","P","Q","N"],
          correctIndex: 2
        },											
        {
          question: "H, J, L, K, J, L, N, M, L, N, ....",
          options: ["M","O","P","Q","N"],
          correctIndex: 2
        },											
        {
          question: "C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "C, E, F, G, I, I, L, K, ....",
          options: ["O, M","P, M","Q, N","O, P","M, Q"],
          correctIndex: 0
        },											
        {
          question: "C, E, F, G, I, I, L, K, ....",
          options: ["O, M","P, M","Q, N","O, P","M, Q"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, E, H, M, ....",
          options: ["P","Q","R","S","U"],
          correctIndex: 4
        },											
        {
          question: "A, B, C, E, H, M, ....",
          options: ["P","Q","R","S","U"],
          correctIndex: 4
        },											
        {
          question: "A, X, O, B, L, O, D, F, O, ....",
          options: ["C, H","G, B","H, C","D, E","B, G"],
          correctIndex: 2
        },											
        {
          question: "A, X, O, B, L, O, D, F, O, ....",
          options: ["C, H","G, B","H, C","D, E","B, G"],
          correctIndex: 2
        },											
        {
          question: "E, E, D, D, J, J, H, H, O, O, L, L, T, ....",
          options: ["T, Q","T, P","T, R","T, S","P, T"],
          correctIndex: 1
        },											
        {
          question: "E, E, D, D, J, J, H, H, O, O, L, L, T, ....",
          options: ["T, Q","T, P","T, R","T, S","P, T"],
          correctIndex: 1
        },											
        {
          question: "W, R, T, P, Q, N, ....",
          options: ["P, O","O, P","N, M","N, L","M, N"],
          correctIndex: 3
        },											
        {
          question: "W, R, T, P, Q, N, ....",
          options: ["P, O","O, P","N, M","N, L","M, N"],
          correctIndex: 3
        },											
        {
          question: "F, F, H, K, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 0
        },											
        {
          question: "F, F, H, K, O, ....",
          options: ["W","V","U","T","S"],
          correctIndex: 0
        },											
        {
          question: "A, B, D, E, F, I, J, K, L, Q, R, S, ....",
          options: ["T, U","T, W","T, Z","T, Y","T, X"],
          correctIndex: 4
        },											
        {
          question: "A, B, D, E, F, I, J, K, L, Q, R, S, ....",
          options: ["T, U","T, W","T, Z","T, Y","T, X"],
          correctIndex: 4
        },											
        {
          question: "6, F, G, 9, I, J, 13, M, N, 18, ....",
          options: ["Q","U","T","D","R"],
          correctIndex: 2
        },											
        {
          question: "6, F, G, 9, I, J, 13, M, N, 18, ....",
          options: ["Q","U","T","D","R"],
          correctIndex: 2
        },											
        {
          question: "H, J, L, K, J, L, N, M, L, N, ....",
          options: ["M","O","P","Q","N"],
          correctIndex: 2
        },											
        {
          question: "H, J, L, K, J, L, N, M, L, N, ....",
          options: ["M","O","P","Q","N"],
          correctIndex: 2
        },											
        {
          question: "C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "C, D, G, K, ....",
          options: ["P","Q","R","S","T"],
          correctIndex: 2
        },											
        {
          question: "C, E, F, G, I, I, L, K, ....",
          options: ["O, M","P, M","Q, N","O, P","M, Q"],
          correctIndex: 0
        },											
        {
          question: "C, E, F, G, I, I, L, K, ....",
          options: ["O, M","P, M","Q, N","O, P","M, Q"],
          correctIndex: 0
        },											
        {
          question: "C, G, I, M, O, Q, U, ....",
          options: ["Z","Y","X","W","V"],
          correctIndex: 3
        },											
        {
          question: "C, G, I, M, O, Q, U, ....",
          options: ["Z","Y","X","W","V"],
          correctIndex: 3
        },											
        {
          question: "B, A, D, C, G, G, K, M, P, ....",
          options: ["T, U","U, V","U, U","U, T","V, U"],
          correctIndex: 1
        },											
        {
          question: "B, A, D, C, G, G, K, M, P, ....",
          options: ["T, U","U, V","U, U","U, T","V, U"],
          correctIndex: 1
        },											
        {
          question: "B, X, A, D, U, E, F, R, I, H, O, M, J, ....",
          options: ["K, Q","L, P","L, Q","M, P","M, Q"],
          correctIndex: 2
        },											
        {
          question: "B, X, A, D, U, E, F, R, I, H, O, M, J, ....",
          options: ["K, Q","L, P","L, Q","M, P","M, Q"],
          correctIndex: 2
        },											
        {
          question: "E, E, G, J, N, S, ....",
          options: ["V","W","X","Y","Z"],
          correctIndex: 3
        },											
        {
          question: "E, E, G, J, N, S, ....",
          options: ["V","W","X","Y","Z"],
          correctIndex: 3
        },											
        {
          question: "C, E, H, M, ....",
          options: ["T","U","V","X","Y"],
          correctIndex: 1
        },											
        {
          question: "C, E, H, M, ....",
          options: ["T","U","V","X","Y"],
          correctIndex: 1
        },											
        {
          question: "A, K, B, E, L, H, I, M, M, M, N, Q, ....",
          options: ["Q, P, U","R, P, T","R, O, T","Q, O, U","Q, O, T"],
          correctIndex: 4
        },											
        {
          question: "A, K, B, E, L, H, I, M, M, M, N, Q, ....",
          options: ["Q, P, U","R, P, T","R, O, T","Q, O, U","Q, O, T"],
          correctIndex: 4
        },											
        {
          question: "O, B, E, D, U, H, I, ....",
          options: ["R, F","P, R","P, S","P, A","Q, A"],
          correctIndex: 3
        },											
        {
          question: "O, B, E, D, U, H, I, ....",
          options: ["R, F","P, R","P, S","P, A","Q, A"],
          correctIndex: 3
        },											
        {
          question: "ABC, FGH, LMN, ....",
          options: ["Q","R","U","T","S"],
          correctIndex: 4
        },											
        {
          question: "ABC, FGH, LMN, ....",
          options: ["Q","R","U","T","S"],
          correctIndex: 4
        },											
        {
          question: "B, C, E, I, ....",
          options: ["P","Q","R","N","O"],
          correctIndex: 1
        },											
        {
          question: "B, C, E, I, ....",
          options: ["P","Q","R","N","O"],
          correctIndex: 1
        },											
        {
          question: "C, Z, D, R, F, L, I, H, M, F, ....",
          options: ["S, F","R, F","R, E","T, D","U, A"],
          correctIndex: 1
        },											
        {
          question: "C, Z, D, R, F, L, I, H, M, F, ....",
          options: ["S, F","R, F","R, E","T, D","U, A"],
          correctIndex: 1
        },											
        {
          question: "Y, U, S, P, L, J, G, ....",
          options: ["A","B","C","D","E"],
          correctIndex: 2
        },											
        {
          question: "Y, U, S, P, L, J, G, ....",
          options: ["A","B","C","D","E"],
          correctIndex: 2
        },											
        {
          question: "10, A, D, 12, C, F, 16, G, J, 22, M, P, 30, ....",
          options: ["T","U","V","W","X"],
          correctIndex: 1
        },											
        {
          question: "10, A, D, 12, C, F, 16, G, J, 22, M, P, 30, ....",
          options: ["T","U","V","W","X"],
          correctIndex: 1
        },											
        {
          question: "B, E, H, F, D, G, J, H, F, I, ....",
          options: ["J, G","G, J","K, N","K, H","K, I"],
          correctIndex: 4
        },											
        {
          question: "B, E, H, F, D, G, J, H, F, I, ....",
          options: ["J, G","G, J","K, N","K, H","K, I"],
          correctIndex: 4
        },											
        {
          question: "A, A, C, F, J, ....",
          options: ["P","R","S","Q","O"],
          correctIndex: 4
        },											
        {
          question: "A, A, C, F, J, ....",
          options: ["P","R","S","Q","O"],
          correctIndex: 4
        },											
        {
          question: "B, B, D, F, J, P, ....",
          options: ["Z","Y","X","W","V"],
          correctIndex: 0
        },											
        {
          question: "B, B, D, F, J, P, ....",
          options: ["Z","Y","X","W","V"],
          correctIndex: 0
        },											
        {
          question: "C, E, D, G, E, I, F, K, G, ....",
          options: ["M, H","N, H","M ,I","N, I","M, J"],
          correctIndex: 0
        },											
        {
          question: "C, E, D, G, E, I, F, K, G, ....",
          options: ["M, H","N, H","M ,I","N, I","M, J"],
          correctIndex: 0
        },											
        {
          question: "L, C, K, D, J, E, I, F, H, G, ....",
          options: ["G","E","D","C","B"],
          correctIndex: 0
        },											
        {
          question: "L, C, K, D, J, E, I, F, H, G, ....",
          options: ["G","E","D","C","B"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, F, I, N, S, ....",
          options: ["Z","Y","X","U","W"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, F, I, N, S, ....",
          options: ["Z","Y","X","U","W"],
          correctIndex: 0
        },											
        {
          question: "A, B, C, E, G, I, L, O, R, ....",
          options: ["T","U","V","W","X"],
          correctIndex: 1
        },											
        {
          question: "A, B, C, E, G, I, L, O, R, ....",
          options: ["T","U","V","W","X"],
          correctIndex: 1
        },											
        {
          question: "B, A, B, F, F, B, J, K, B, ....",
          options: ["N, P","M, Q","L, R","T","P, U"],
          correctIndex: 0
        },											
        {
          question: "B, A, B, F, F, B, J, K, B, ....",
          options: ["N, P","M, Q","L, R","T","P, U"],
          correctIndex: 0
        },											
        {
          question: "A, B, F, E, I, J, N, M, ....",
          options: ["O","P","Q","R","S"],
          correctIndex: 2
        },											
        {
          question: "A, B, F, E, I, J, N, M, ....",
          options: ["O","P","Q","R","S"],
          correctIndex: 2
        },											
        {
          question: "A, C, F, J, ....",
          options: ["L","M","N","O","P"],
          correctIndex: 3
        },											
        {
          question: "A, C, F, J, ....",
          options: ["L","M","N","O","P"],
          correctIndex: 3
        },											
        {
          question: "A, A, B, C, D, F, G, ....",
          options: ["J, K","K, J","K, L","L, K","L, M"],
          correctIndex: 0
        },											
        {
          question: "A, A, B, C, D, F, G, ....",
          options: ["J, K","K, J","K, L","L, K","L, M"],
          correctIndex: 0
        },											
        {
          question: "JA, IB, HC, GD, ....",
          options: ["EF","FE","GH","HG","IJ"],
          correctIndex: 1
        },											
        {
          question: "JA, IB, HC, GD, ....",
          options: ["EF","FE","GH","HG","IJ"],
          correctIndex: 1
        },											
        {
          question: "C, S, E, P, G, M, I, J, ....",
          options: ["L, I","L, H","L, G","K, G","K, H"],
          correctIndex: 3
        },											
        {
          question: "C, S, E, P, G, M, I, J, ....",
          options: ["L, I","L, H","L, G","K, G","K, H"],
          correctIndex: 3
        },											
        {
          question: "N, Q, T, S, R, U, X, W, V, ....",
          options: ["T","U","X","Y","Z"],
          correctIndex: 3
        },											
        {
          question: "N, Q, T, S, R, U, X, W, V, ....",
          options: ["T","U","X","Y","Z"],
          correctIndex: 3
        },											
        {
          question: "B, B, D, F, J, ...., Z",
          options: ["O","P","Q","S","U"],
          correctIndex: 1
        },											
        {
          question: "B, B, D, F, J, ...., Z",
          options: ["O","P","Q","S","U"],
          correctIndex: 1
        },											
        {
          question: "A, B, E, ...., Q, Z",
          options: ["N","M","L","K","J"],
          correctIndex: 4
        },											
        {
          question: "A, B, E, ...., Q, Z",
          options: ["N","M","L","K","J"],
          correctIndex: 4
        },											
        {
          question: "E, H, A, J, M, B, ....",
          options: ["A, P, Z","B, P, T","C, O, Q","D, O, R","E, O, S"],
          correctIndex: 3
        },											
        {
          question: "E, H, A, J, M, B, ....",
          options: ["A, P, Z","B, P, T","C, O, Q","D, O, R","E, O, S"],
          correctIndex: 3
        },											
        {
          question: "Z, A, H, I, J, Z, A, K, L, M, Z, A, ....",
          options: ["N, O, Q","O, P, Q","R, S, T","N, O, P","P, O, Y"],
          correctIndex: 3
        },											
        {
          question: "Z, A, H, I, J, Z, A, K, L, M, Z, A, ....",
          options: ["N, O, Q","O, P, Q","R, S, T","N, O, P","P, O, Y"],
          correctIndex: 3
        },											
        {
          question: "A, C, E, G, …., ….",
          options: ["J K","I L","J L","I K","K L"],
          correctIndex: 3
        },											
        {
          question: "A, C, E, G, …., ….",
          options: ["J K","I L","J L","I K","K L"],
          correctIndex: 3
        },											
        {
          question: "A, D, G, J, M, …., ….",
          options: ["N O","P S","P T","O Q","O P"],
          correctIndex: 1
        },											
        {
          question: "A, D, G, J, M, …., ….",
          options: ["N O","P S","P T","O Q","O P"],
          correctIndex: 1
        },											
        {
          question: "A, B, B, D, C, F, D, …., ….",
          options: ["H E","F G","E G","G H","H F"],
          correctIndex: 0
        },											
        {
          question: "A, B, B, D, C, F, D, …., ….",
          options: ["H E","F G","E G","G H","H F"],
          correctIndex: 0
        },											
        {
          question: "J, K, K, J, L, I, M, H, …., ….",
          options: ["O I","N G","F G","N H","N O"],
          correctIndex: 1
        },											
        {
          question: "J, K, K, J, L, I, M, H, …., ….",
          options: ["O I","N G","F G","N H","N O"],
          correctIndex: 1
        },											
        {
          question: "A, B, B, B, D, B, G, …., ….",
          options: ["C F","D G","C K","B L","B K"],
          correctIndex: 4
        },											
        {
          question: "A, B, B, B, D, B, G, …., ….",
          options: ["C F","D G","C K","B L","B K"],
          correctIndex: 4
        },											
        {
          question: "A, B, C, A, E, D, A, H, E, A, …., ….",
          options: ["K L","J K","J F","K F","H E"],
          correctIndex: 3
        },											
        {
          question: "A, B, C, A, E, D, A, H, E, A, …., ….",
          options: ["K L","J K","J F","K F","H E"],
          correctIndex: 3
        },											
        {
          question: "T, Z, U, Y, V, X, W, W, …., ….",
          options: ["X V","X Y","X X","X Z","X W"],
          correctIndex: 0
        },											
        {
          question: "T, Z, U, Y, V, X, W, W, …., ….",
          options: ["X V","X Y","X X","X Z","X W"],
          correctIndex: 0
        },											
        {
          question: "J, Q, M, N, P, K, S, …., ….",
          options: ["H W","I W","I V","H V","G V"],
          correctIndex: 3
        },											
        {
          question: "J, Q, M, N, P, K, S, …., ….",
          options: ["H W","I W","I V","H V","G V"],
          correctIndex: 3
        },											
        {
          question: "A, B, D, C, E, F, H, G, I, …., ….",
          options: ["J K","J L","K J","K L","K M"],
          correctIndex: 1
        },											
        {
          question: "A, B, D, C, E, F, H, G, I, …., ….",
          options: ["J K","J L","K J","K L","K M"],
          correctIndex: 1
        },											
        {
          question: "A, B, D, E, G, H, J, K, M, …., ….",
          options: ["O P","N O","N P","O Q","N Q"],
          correctIndex: 2
        },											
        {
          question: "A, B, D, E, G, H, J, K, M, …., ….",
          options: ["O P","N O","N P","O Q","N Q"],
          correctIndex: 2
        },											
        {
          question: "A, B, B, C, C, C, D, D, D, …., ….",
          options: ["D D","E E","E F","D E","E D"],
          correctIndex: 3
        },											
        {
          question: "A, B, B, C, C, C, D, D, D, …., ….",
          options: ["D D","E E","E F","D E","E D"],
          correctIndex: 3
        },											
        {
          question: "A, B, Z, C, D, Y, E, F, X, G, …, ….",
          options: ["W H","H W","W V","G V","H V"],
          correctIndex: 1
        },											
        {
          question: "A, B, Z, C, D, Y, E, F, X, G, …, ….",
          options: ["W H","H W","W V","G V","H V"],
          correctIndex: 1
        },											
        {
          question: "J, K, L, O, N, M, P, Q, R, …., ….",
          options: ["U T","S T","S U","U S","T U"],
          correctIndex: 0
        },											
        {
          question: "J, K, L, O, N, M, P, Q, R, …., ….",
          options: ["U T","S T","S U","U S","T U"],
          correctIndex: 0
        },											
        {
          question: "A, B, D, E, H, I, M, N, …., ….",
          options: ["O P","P Q","R S","S T","T U"],
          correctIndex: 3
        },											
        {
          question: "A, B, D, E, H, I, M, N, …., ….",
          options: ["O P","P Q","R S","S T","T U"],
          correctIndex: 3
        },											
        {
          question: "A, C, B, D, E, F, H, G, I, J, …., ….",
          options: ["M L","K L","K M","M K","M N"],
          correctIndex: 2
        },											
        {
          question: "A, C, B, D, E, F, H, G, I, J, …., ….",
          options: ["M L","K L","K M","M K","M N"],
          correctIndex: 2
        },											
        {
          question: "J, K, L, M, K, N, O, P, L, Q, R, …., …..",
          options: ["S T","J S","K T","S M","S N"],
          correctIndex: 3
        },											
        {
          question: "J, K, L, M, K, N, O, P, L, Q, R, …., …..",
          options: ["S T","J S","K T","S M","S N"],
          correctIndex: 3
        },											
        {
          question: "G, H, I, A, K, L, M, B, O, P, Q, …., ….",
          options: ["R C","R S","C R","R T","C S"],
          correctIndex: 4
        },											
        {
          question: "G, H, I, A, K, L, M, B, O, P, Q, …., ….",
          options: ["R C","R S","C R","R T","C S"],
          correctIndex: 4
        },											
        {
          question: "J, K, M, N, L, M, O, P, N, O, …., ….",
          options: ["PQ","OP","QR","OR","PR"],
          correctIndex: 2
        },											
        {
          question: "J, K, M, N, L, M, O, P, N, O, …., ….",
          options: ["PQ","OP","QR","OR","PR"],
          correctIndex: 2
        },											
        {
          question: "A, A, B, C, B, G, H, I, C, …., ….",
          options: ["D E","J K","M N","K L","L M"],
          correctIndex: 2
        },											
        {
          question: "A, A, B, C, B, G, H, I, C, …., ….",
          options: ["D E","J K","M N","K L","L M"],
          correctIndex: 2
        },											
        {
          question: "…., …., F, H, J, L, N, P, R, T",
          options: ["A C","A D","B D","C D","A B"],
          correctIndex: 2
        },											
        {
          question: "…., …., F, H, J, L, N, P, R, T",
          options: ["A C","A D","B D","C D","A B"],
          correctIndex: 2
        },											
        {
          question: "…., …., P, Q, R, R, T, S",
          options: ["O P","N O","O N","M P","N P"],
          correctIndex: 4
        },											
        {
          question: "…., …., P, Q, R, R, T, S",
          options: ["O P","N O","O N","M P","N P"],
          correctIndex: 4
        },											
        {
          question: "…., …., U, X, T, Y, S, Z",
          options: ["V W","W Z","V Z","T U","W T"],
          correctIndex: 0
        },											
        {
          question: "…., …., U, X, T, Y, S, Z",
          options: ["V W","W Z","V Z","T U","W T"],
          correctIndex: 0
        },											
        {
          question: "…., …., K, B, L, M, C, N, O",
          options: ["B J","A B","I J","A J","H I"],
          correctIndex: 3
        },											
        {
          question: "…., …., K, B, L, M, C, N, O",
          options: ["B J","A B","I J","A J","H I"],
          correctIndex: 3
        },											
        {
          question: "…., …., P, O, R, Q, T, S, V, U",
          options: ["M N","N M","L M","M L","O M"],
          correctIndex: 1
        },											
        {
          question: "…., …., P, O, R, Q, T, S, V, U",
          options: ["M N","N M","L M","M L","O M"],
          correctIndex: 1
        },											
        {
          question: "A, C, D, B, …., …., H, F, I, K, L, J",
          options: ["E F","F G","G E","D G","E G"],
          correctIndex: 4
        },											
        {
          question: "A, C, D, B, …., …., H, F, I, K, L, J",
          options: ["E F","F G","G E","D G","E G"],
          correctIndex: 4
        },											
        {
          question: "A, J, B, K, C, L, D, (....), (....)",
          options: ["S, D","R, D","S, E","R, E","M, E"],
          correctIndex: 4
        },											
        {
          question: "A, J, B, K, C, L, D, (....), (....)",
          options: ["S, D","R, D","S, E","R, E","M, E"],
          correctIndex: 4
        },											
        {
          question: "(....), (....), H, J , L, N",
          options: ["H, J","I, K","J, K","D, F","L, M"],
          correctIndex: 3
        },											
        {
          question: "(....), (....), H, J , L, N",
          options: ["H, J","I, K","J, K","D, F","L, M"],
          correctIndex: 3
        },											
        {
          question: "Z, Y, W, V, T, S, (....), (....)",
          options: ["Q, S","Q, P","R, T","S, U","S, V"],
          correctIndex: 1
        },											
        {
          question: "Z, Y, W, V, T, S, (....), (....)",
          options: ["Q, S","Q, P","R, T","S, U","S, V"],
          correctIndex: 1
        },											
        {
          question: "D, E, G, H, J, K, (....), (....)",
          options: ["M, P","M, N","N, P","N, O","N, Q"],
          correctIndex: 1
        },											
        {
          question: "D, E, G, H, J, K, (....), (....)",
          options: ["M, P","M, N","N, P","N, O","N, Q"],
          correctIndex: 1
        },											
        {
          question: "B, M, C, N, D, O, (....), (....)",
          options: ["E, P","D, R","G, F","H, S","E, R"],
          correctIndex: 0
        },											
        {
          question: "B, M, C, N, D, O, (....), (....)",
          options: ["E, P","D, R","G, F","H, S","E, R"],
          correctIndex: 0
        },											
        {
          question: "P, F, Q, E, R, D, (....), (....)",
          options: ["R, B","O, B","P, B","S, C","R, D"],
          correctIndex: 3
        },											
        {
          question: "P, F, Q, E, R, D, (....), (....)",
          options: ["R, B","O, B","P, B","S, C","R, D"],
          correctIndex: 3
        },											
        {
          question: "A, D, G, (....), (....)",
          options: ["J, L","J, M","K, L","K, M","L, N"],
          correctIndex: 1
        },											
        {
          question: "A, D, G, (....), (....)",
          options: ["J, L","J, M","K, L","K, M","L, N"],
          correctIndex: 1
        },											
        {
          question: "J, L, N, P, (....), (....)",
          options: ["R, T","R, U","S, U","S, V","T, V"],
          correctIndex: 0
        },											
        {
          question: "J, L, N, P, (....), (....)",
          options: ["R, T","R, U","S, U","S, V","T, V"],
          correctIndex: 0
        },											
        {
          question: "P, E, Q, F, R, G, (....), (....)",
          options: ["U, G","U, H","T, G","S, H","S, G"],
          correctIndex: 3
        },											
        {
          question: "P, E, Q, F, R, G, (....), (....)",
          options: ["U, G","U, H","T, G","S, H","S, G"],
          correctIndex: 3
        },											
        {
          question: "D, Z, E, Y, F, X, (....), (....)",
          options: ["O, V","D, W","G, W","E, W","F, W"],
          correctIndex: 2
        },											
        {
          question: "D, Z, E, Y, F, X, (....), (....)",
          options: ["O, V","D, W","G, W","E, W","F, W"],
          correctIndex: 2
        },											
        {
          question: "(....), (....), M, Q, U, Y",
          options: ["G, J","F, J","G, K","I, L","E, I"],
          correctIndex: 4
        },											
        {
          question: "(....), (....), M, Q, U, Y",
          options: ["G, J","F, J","G, K","I, L","E, I"],
          correctIndex: 4
        },											
        {
          question: "K, J, I, H, G, (....), (....)",
          options: ["S, R","T, S","F, E","T, U","S, T"],
          correctIndex: 2
        },											
        {
          question: "K, J, I, H, G, (....), (....)",
          options: ["S, R","T, S","F, E","T, U","S, T"],
          correctIndex: 2
        },											
        {
          question: "P, Q, Q, R, R, S, (....), (....)",
          options: ["G, F","H, F","H, G","S, T","F, H"],
          correctIndex: 3
        },											
        {
          question: "P, Q, Q, R, R, S, (....), (....)",
          options: ["G, F","H, F","H, G","S, T","F, H"],
          correctIndex: 3
        },											
        {
          question: "A, B, S, T, C, D, (....), (....)",
          options: ["P, Q","U, V","P, R","Q, R","R, S"],
          correctIndex: 1
        },											
        {
          question: "A, B, S, T, C, D, (....), (....)",
          options: ["P, Q","U, V","P, R","Q, R","R, S"],
          correctIndex: 1
        },											
        {
          question: "A, C, E, G, (....), (....)",
          options: ["H, J","I, K","J, K","K, L","L, M"],
          correctIndex: 1
        },											
        {
          question: "A, C, E, G, (....), (....)",
          options: ["H, J","I, K","J, K","K, L","L, M"],
          correctIndex: 1
        },											
        {
          question: "F, G, O, H, I, O, J, K, O, (....), (....)",
          options: ["N, R","O, R","P, R","O, Q","L, M"],
          correctIndex: 4
        },											
        {
          question: "F, G, O, H, I, O, J, K, O, (....), (....)",
          options: ["N, R","O, R","P, R","O, Q","L, M"],
          correctIndex: 4
        },											
        {
          question: "C, B, E, D, G, F, (....), (....)",
          options: ["J, I","J, K","I, H","K, J","I, K"],
          correctIndex: 2
        },											
        {
          question: "C, B, E, D, G, F, (....), (....)",
          options: ["J, I","J, K","I, H","K, J","I, K"],
          correctIndex: 2
        },											
        {
          question: "G, I, K, M, (....), (....)",
          options: ["O, Q","R, U","S, U","R, T","S, T"],
          correctIndex: 0
        },											
        {
          question: "G, I, K, M, (....), (....)",
          options: ["O, Q","R, U","S, U","R, T","S, T"],
          correctIndex: 0
        },											
        {
          question: "A, K, A, L, A, M, A, (....), (....)",
          options: ["P, D","N, A","Q, D","Q, E","R, D"],
          correctIndex: 1
        },											
        {
          question: "A, K, A, L, A, M, A, (....), (....)",
          options: ["P, D","N, A","Q, D","Q, E","R, D"],
          correctIndex: 1
        },											
        {
          question: "P, Q, S, T, V, W, (....), (....)",
          options: ["M, O","M, P","Y, Z","N, P","O, P"],
          correctIndex: 2
        },											
        {
          question: "P, Q, S, T, V, W, (....), (....)",
          options: ["M, O","M, P","Y, Z","N, P","O, P"],
          correctIndex: 2
        },											
        {
          question: "A, E, B, E, C, E, (....), (....)",
          options: ["O, F","D, E","F, O","E, F","E, O"],
          correctIndex: 1
        },											
        {
          question: "A, E, B, E, C, E, (....), (....)",
          options: ["O, F","D, E","F, O","E, F","E, O"],
          correctIndex: 1
        },											
        {
          question: "S, A, T, A, U, A, (....), (....)",
          options: ["V, A","D, E","E, F","E, D","E, E"],
          correctIndex: 0
        },											
        {
          question: "S, A, T, A, U, A, (....), (....)",
          options: ["V, A","D, E","E, F","E, D","E, E"],
          correctIndex: 0
        },											
        {
          question: "(....), (....), J, M, P, S",
          options: ["E, H","F, H","D, G","F, G","G, J"],
          correctIndex: 2
        },											
        {
          question: "(....), (....), J, M, P, S",
          options: ["E, H","F, H","D, G","F, G","G, J"],
          correctIndex: 2
        },											
        {
          question: "(....), (....), J, B, K, C, L, D",
          options: ["L, A","I, A","J, A","L, B","K, B"],
          correctIndex: 1
        },											
        {
          question: "(....), (....), J, B, K, C, L, D",
          options: ["L, A","I, A","J, A","L, B","K, B"],
          correctIndex: 1
        },											
        {
          question: "N, A, O, B, P, C, (....), (....)",
          options: ["Q, D","Q, F","N, E","O, E","M, E"],
          correctIndex: 0
        },											
        {
          question: "N, A, O, B, P, C, (....), (....)",
          options: ["Q, D","Q, F","N, E","O, E","M, E"],
          correctIndex: 0
        },											
];